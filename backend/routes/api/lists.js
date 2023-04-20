const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const List = require("../../models/List");
const User = require("../../models/User");
const Image = require("../../models/Image")
const passport = require("passport");

const { uploadToAWSWithURL, getUrlFromAwsWithKey } = require("../../awsS3");

const { restoreUser } = require("../../config/passport");

const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require("../../config/keys");
const { Route53RecoveryCluster } = require("aws-sdk");
const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

//POST /api/lists
//string

//checked good
//posting list
router.post("/", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);
  const newList = new List({
    hairColor: req.body.hairColor,
    clothingAccessory: req.body.clothingAccessory,
    gender: req.body.gender,
    background: req.body.background,
    artStyle: req.body.artStyle,
    websiteStyle: req.body.websiteStyle,
  });

  const list = await newList.save();

  const mongooseUser = await User.findOne({_id: req.user._id})


  mongooseUser["list"].push(list._id)

  await mongooseUser.save();

  return res.json(list);
});

//updating list
router.patch("/:id", restoreUser, async (req, res, next) => {
  try {
    const updatedList = await List.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          hairColor: req.body.hairColor,
          clothingAccessory: req.body.clothingAccessory,
          gender: req.body.gender,
          background: req.body.background,
          artStyle: req.body.artStyle,
          websiteStyle: req.body.websiteStyle,
        },
      },
      { new: true }
    );

    return res.json(updatedList);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

//delete
router.delete("/:id", restoreUser, async (req, res, next) => {
     if (!req.user) return res.json(null);
  try {
    const deletedList = await List.findOneAndDelete({ _id: req.params.id });
    return res.json(deletedList);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

//checked //Mike
// passing in listId for list that already exists in our DB.
router.get("/image/:id", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);

  try {
    let list = await List.findOne({ _id: req.params.id });
    let prompt;
    if (list) {
      prompt = `Extremely Detailed Professional ${list.artStyle} of a ${list.gender} with ${list.hairColor} hair, wearing an ${list.clothingAccessory}, official media, trending on ${list.websiteStyle}, background ${list.background}`;
      //console.log(prompt)
      const numberOfImages = 4;
      const imageSize = "1024x1024";
      openai
        .createImage({
          prompt: prompt,
          n: numberOfImages,
          size: imageSize,
        })
        .then(async (data) => {
          let imageKeys = [];

          imageKeys = await Promise.all(
            data.data.data.map(async (image, idx) => {
              const imageKeyPromise = uploadToAWSWithURL(
                image.url,
                `testimage${idx}.png`
              );
              const imageKey = await imageKeyPromise;
              return imageKey;
            })
          );

          let imageObjects = await Promise.all(imageKeys.map(async (key) => {
            let newImage = new Image({
              prompts: list,
              AWSKey: key
            })

            const image = await newImage.save();
            return image;
          }))

          let tempUrls = [];

          tempUrls = await Promise.all(
            imageKeys.map(async (key) => {
              const tempUrl = await getUrlFromAwsWithKey(key);
              return tempUrl;
            })
          );

          const returns = imageObjects.map((imageObj, idx) => {
            // console.log(imageObj)
            const resObj = {...imageObj.toObject(),
              tempUrl: tempUrls[idx]
            };

            return resObj
          })

          // list.save();

          return res.json({
            list: list,
            images: returns,
          });
        });
    }
  } catch (err) {
    return res.json(err);
  }
});

//chekced good
//index
// to send back the lists in database for the front to load when they initialize the app.
router.get("/all", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (err) {
    return res.json(err);
  }
});

// route to return all the lists for a given userId
//checked good
router.get("/all/:userId", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);

  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (user) {
      const lists = await Promise.all(user.list.map(async(listId) => {
        const mongooseListObj = await List.findById(listId);
        return mongooseListObj
      }))
      return res.json({ lists });
    }
  } catch (err) {
    return res.json(err);
  }
});

//checked good
//list show
router.get("/:id", restoreUser, async (req, res, next) => {
   if (!req.user) return res.json(null);
  try {
    const list = await List.findOne({ _id: req.params.id });
    if (list) {
      return res.json(list);
    }
    git;
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
