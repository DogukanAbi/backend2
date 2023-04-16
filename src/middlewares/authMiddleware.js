const jwt = require("jsonwebtoken");

function authMiddleware(roles) {
  return function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No authentication token provided" });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      if (!roles.includes(decodedToken.role)) {
        return res.status(403).json({
          message: "You do not have permission to access this resource",
        });
      }

      req.user = decodedToken;

      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid authentication token" });
    }
  };
}

module.exports = { authMiddleware };
