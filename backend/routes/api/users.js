const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const { loginUser, restoreUser } = require("../../config/passport");
const { isProduction } = require("../../config/keys");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { Readable } = require("stream");

const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");

router.get("/profile/:id", async (req, res) => {
  try {
    const fileId = req.params.id.trim();
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "profile",
    });

    // console.log(fileId);
    const downloadStream = bucket.openDownloadStream(
      new mongoose.Types.ObjectId(fileId)
    );

    downloadStream.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//patch
// upload profile image
router.patch(
  "/upload",
  restoreUser,
  upload.single("profileImage"),
  async (req, res) => {
       if (!req.user) return res.json(null);
    try {
      const user = req.user;
      const buffer = req.file.buffer; // get the binary data of the uploaded file
      const contentType = req.file.mimetype;
      const filename = req.file.originalname;
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'profile'
  });

      // create a write stream to save the file to GridFS
      const uploadStream = bucket.openUploadStream(filename, {
        metadata: { contentType },
        chunkSizeBytes: 1024 * 1024, // optional: set the chunk size for better performance
      });

      // pipe the file data into the write stream
      const stream = Readable.from(buffer);
      stream.pipe(uploadStream);

      // wait for the file to finish uploading
      await new Promise((resolve, reject) => {
        uploadStream.on("finish", resolve);
        uploadStream.on("error", reject);
      });

      // get the ID of the newly uploaded file
      const fileId = uploadStream.id;

      // update the user's profileImage field with the new file ID
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { profileImage: fileId },
        { new: true }
      );

      res.json({
        message: "Image uploaded successfully",
        user: updatedUser,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

router.patch("/:userId", restoreUser, async (req, res, next) => {
  //will return updated user info.
  if (!req.user) return res.json(null);
  const mongooseUser = await User.findOne({_id: req.user._id});

  const newUserInfo = req.body;

  if (newUserInfo?.email) {

    const alreadyMongooseUser = await User.findOne({email: newUserInfo.email});

    if (alreadyMongooseUser && alreadyMongooseUser.email !== mongooseUser.email) {
      const err = new Error("Email is taken:(")

      let errors = {};
      errors.email = "Email is taken:(";

      err.errors = errors;

      return next(err)

    }


    if (newUserInfo.email.length < 6) {

      const err = new Error("Validation Error")
      err.statusCode = 400;
      let errors = {};
      errors.email = "Invalid email sorry!";


      if (newUserInfo?.username) {
        if (newUserInfo.username.length < 2) {
          errors.username = "Invalid user name sorry!"
        }

      }

      err.errors = errors;
      return next(err)
    }
  }

  if (newUserInfo?.username) {


    if (newUserInfo.username.length < 2) {
      let errors = {};
      const err = new Error("Validation Error");
      errors.username = "Invalid user name sorry!";
      err.errors = errors;
      return next(err)
    }


  }

  const parametersToUpdate = Object.keys(newUserInfo);

  parametersToUpdate.forEach((parameter) => {
    mongooseUser[parameter] = newUserInfo[parameter]
  });

  mongooseUser.save();

  res.json(mongooseUser);

})

router.get("/current", restoreUser, (req, res) => {
  if (!isProduction) {
    // In development, allow React server to gain access to the CSRF token
    // whenever the current user information is first loaded into the
    // React application
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    lists: req.user.lists,
    images: req.user.images,
    profileImage:req.user.profileImage

  });
});

// POST /api/users/register
router.post("/register", validateRegisterInput, async (req, res, next) => {
  // Check to make sure no one has already registered with the proposed email or
  // username.
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });

  if (user) {
    // Throw a 400 error if the email address and/or username already exists
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }

  // Otherwise create a new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user)); // <-- THIS IS THE CHANGED LINE
      } catch (err) {
        next(err);
      }
    });
  });
});

// POST /api/users/login
router.post("/login", validateLoginInput, async (req, res, next) => {
  passport.authenticate("local", async function (err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error("Invalid credentials");
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }

    return res.json(await loginUser(user)); // <-- THIS IS THE CHANGED LINE

    // return res.json(await loginUser(user)); // <-- THIS IS THE CHANGED LINE
  })(req, res, next);
});


module.exports = router;
