var express = require("express");
var router = express.Router();

router.get("/home", function (req, res) {
  res.send("Hello World!");
});

router.post("/home", function (req, res) {
    res.send("You just called the post method at '/home'!\n");
    }
);

module.exports = router;