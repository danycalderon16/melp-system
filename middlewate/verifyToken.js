import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).json({ authorized: false });

  const accessToken = req.headers.authorization.split(" ")[1];

  try {
    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.claims = decodedAccessToken;

    if (decodedAccessToken) next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ authorized: false });
  }
};

export default verifyToken;
