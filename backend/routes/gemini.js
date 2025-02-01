const express = require("express");
const { getGeminiResponse } = require("../controllers/geminiController");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Secured Gemini route
router.post("/", verifyToken, getGeminiResponse);

module.exports = router;
