const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");
const router = express.Router();
const verifyToken = require("../config/token");

const upload = multer({ storage: multer.memoryStorage() });

// Get
router.get("/users", userController.getAllUsers);

// Post
router.post(
  "/register",
  upload.single("profileImage"),
  userController.registerUser
);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);

// Put
router.put("/description", verifyToken, userController.updateUserDescription);
router.put(
  "/profileImage",
  verifyToken,
  upload.single("profileImage"),
  userController.updateUserProfileImage
);
router.put("/location", verifyToken, userController.updateUserLocation);

module.exports = router;
