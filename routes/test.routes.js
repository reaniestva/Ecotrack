const express = require("express");
const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
    res.json({
        message: "Token is valid",
        user: req.user,
    });
});

router.get(
    "/admin",
    authenticateToken,
    authorizeRole("admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin!",
            user: req.user,
        });
    }
);

module.exports = router;