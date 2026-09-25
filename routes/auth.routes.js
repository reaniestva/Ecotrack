const express = require("express");
const multer = require("multer");

const {
  register,
  login,
} = require("../controllers/auth.controller");

const router = express.Router();

const upload = multer();

router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);

module.exports = router;