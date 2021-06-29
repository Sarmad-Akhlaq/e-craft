const { addArt, getArts } = require("../controllers/artcontroller");
const express = require("express");
const router = express.Router();

router.get("/",getArts)
router.post("/",addArt)

module.exports = router;

