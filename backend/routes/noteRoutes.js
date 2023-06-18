const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
} = require("../controllers/noteControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote);
// .put().delete();

module.exports = router;
