const express = require("express");
const cors = require("cors");
require("dotenv").config(); // To load API key from .env file
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
const authRoutes = require("./routes/auth");
const geminiRoutes = require("./routes/gemini");

// Use the routes
app.use("/api/auth", authRoutes);
app.use("/api/gemini", geminiRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
