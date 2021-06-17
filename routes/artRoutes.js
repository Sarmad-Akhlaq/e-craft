const { addArt } = require("../controllers/artcontroller");
const express = require("express");
const router = express.Router();

router.post("/",addArt)

module.exports = router;

