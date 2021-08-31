import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
    req.session = decoded.session;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
