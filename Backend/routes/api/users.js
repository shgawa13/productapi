const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/UsersController");

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
