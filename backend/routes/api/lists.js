const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const List = require("../../models/List");
const passport = require("passport");

const { restoreUser } = require("../../config/passport");
const { ObjectId } = require("mongodb");

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

 router.post("/image",restoreUser,async(req,res,next)=>{
if(!req.user)return res.json(null);

 })


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
