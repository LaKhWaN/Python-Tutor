const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.header("Authorization"); // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Ensure token starts with "Bearer " and remove it
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length); // Remove "Bearer " from token
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Attach decoded userId to request
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = verifyToken;
