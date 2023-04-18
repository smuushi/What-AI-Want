const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const List = require("../../models/List");
const User = require("../../models/User");
const Image = require("../../models/Image")
const passport = require("passport");
const { restoreUser } = require("../../config/passport");


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
    returns
  })

})

router.post("/save/:imageId", restoreUser, async (req, res, next) => {
    if (!req.user) return res.json(null);
  
    const mongooseUser = await User.findOne({_id: req.user._id});

    const image = await Image.findOne({_id: req.params.imageId});

    mongooseUser.images.push(image._id);

    mongooseUser.save();

    return json(mongooseUser);
})



module.exports = router;