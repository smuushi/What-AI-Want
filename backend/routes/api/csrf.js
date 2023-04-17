const express = require("express");
const router = express.Router();

const { isProduction } = require("../../config/keys");

if (!isProduction) {
  router.get("/restore", (req, res) => {
    //generate csrftoken
    const csrfToken = req.csrfToken();
    //saving it to cookie
  //  res.cookie("CSRF-TOKEN", csrfToken);
    res.status(200).json({
      "CSRF-Token": csrfToken,
    });
  });
}

module.exports = router;
