const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const List = require("../../models/List");
const User = require("../../models/User")
const passport = require("passport");

const { uploadToAWSWithURL, getUrlFromAwsWithKey } = require("../../awsS3")

const { restoreUser } = require("../../config/passport");

const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require("../../config/keys");
const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

//POST /api/lists
//string

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


  return res.json(list);
});

router.get("/image/:id", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);
  try {
    let list = await List.findOne({ _id: req.params.id });
    let prompt;
    if (list) {
      prompt = `${list.artStyle} key visual of a ${list.gender} with ${list.hairColor} hair and happy, wearing an ${list.clothingAccessory}, official media, trending on ${list.websiteStyle}, background ${list.background}`;
      //console.log(prompt)
      const numberOfImages = 1;
      const imageSize = "1024x1024";
      openai
        .createImage({
          prompt: prompt,
          n: numberOfImages,
          size: imageSize,
        })
        .then(async (data) => {
          
          list.imageUrl = data.data.data[0].url;

          const imageKey = await uploadToAWSWithURL(data.data.data[0].url, "testimage.png");
          
          list.imageKey = imageKey;


          
          const tempUrl = getUrlFromAwsWithKey(imageKey);
          
          list.save();
          
          
          list.tempUrl = tempUrl;

          
          return res.json(list);
        });
    }
  } catch (err) {
    return res.json(err);
  }
});

router.get("/:id", restoreUser, async (req, res, next) => {
  if (!req.user) return res.json(null);
  try {
    const list = await List.findOne({ _id: req.params.id });
    if (list) {
      return res.json(list);
    }
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
