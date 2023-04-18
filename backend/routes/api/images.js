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
    const image = await Image.findOne({_id: imageId})
    return image
  }))

  res.json({
    images
  })

})

router.post("/save/:imageId", restoreUser, async (req, res, next) => {
    if (!req.user) return res.json(null);
  
    //   const user = await 
    

})



module.exports = router;