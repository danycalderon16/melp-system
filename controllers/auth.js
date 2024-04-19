import jwt from "jsonwebtoken";

export class AuthController {
  createToken = async (req, res) => {
    const token = jwt.sign(
      {
        user: "dacv",
      },
      process.env.ACCESS_TOKEN_SECRET || "dacv",
      { expiresIn: "12h" }
    );

    return res.status(200).json({ token });
  };
}
