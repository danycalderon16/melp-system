import jwt from "jsonwebtoken";

export class AuthController {
  createToken = async (req, res) => {
    const token = jwt.sign(
      {
        user: "dacv",
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  };
}
