const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const List = require("../../models/List");
const User = require("../../models/User");
const Image = require("../../models/Image")
const passport = require("passport");
const { restoreUser } = require("../../config/passport");
const {getUrlFromAwsWithKey} = require("../../awsS3")


router.get("/all/:userId", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);

  const user = await User.findOne({ _id: req.params.userId });
  
  const images = await Promise.all(user.images.map(async (imageId) => {
    const image = await Image.findOne({_id: imageId});
    return image;
  }))


  let keys = [];

  images.forEach((image) => {
    keys.push(image.AWSKey)
  })

  tempUrls = await Promise.all(
    keys.map(async (key) => {
      const tempUrl = await getUrlFromAwsWithKey(key);
      return tempUrl;
    })
  );

  const returns = images.map((imageObj, idx) => {
    // console.log(imageObj)
    const resObj = {...imageObj.toObject(),
      tempUrl: tempUrls[idx]
    };
    
    return resObj
  })


  res.json({
    images: returns
  })

})

router.post("/save/:imageId", restoreUser, async (req, res, next) => {
    if (!req.user) return res.json(null);
  
    const mongooseUser = await User.findOne({_id: req.user._id});

    const image = await Image.findOne({_id: req.params.imageId});

    mongooseUser.images.push(image._id);

    await mongooseUser.save();

    return res.json(mongooseUser);
})

router.delete("/:id", restoreUser, async (req, res, next) => {
    if (!req.user) return res.json(null);

    await Image.deleteOne({_id: req.params.id})

    const mongooseUser = await User.findOne({_id: req.user._id});

    const indexToDelete = mongooseUser.images.indexOf(req.params.id)

    if (indexToDelete > -1) { // only splice array when item is found
        array.splice(indexToDelete, 1); // 2nd parameter means remove one item only
    }

    mongooseUser.save();

    return res.json(mongooseUser)

})

router.get("/random", async (req, res, next) => {
    const images = await Image.aggregate([{$sample: {size:10 }}])

    const imageKeys = [];

    images.forEach((image) => {
        imageKeys.push(image.AWSKey);
    })

    const urls = await Promise.all(imageKeys.map(async (key)=> {
        const url = await getUrlFromAwsWithKey(key);
        return url
    }))

    const returns = images.map((imageObj, idx) => {

        const resObj = {...imageObj,
          tempUrl: urls[idx]
        };

        return resObj;
    })



    // console.log(images)


    res.json({images: returns})

})



module.exports = router;