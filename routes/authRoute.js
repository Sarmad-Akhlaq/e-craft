const express = require("express");
const { signUp, fetchUsers, login } = require("../controllers/authController");
const router = express.Router();

// router.get("/",(req,res) => {
//     res.status(200).json({
//         status: "success",
//         msg: "auth home route"
//     })
// });

router.post("/signup", signUp);
router.get("/", fetchUsers);
router.post("/login", login);

module.exports = router;
