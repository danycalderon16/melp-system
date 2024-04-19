import { Router } from "express";
import { AuthController } from "../controllers/auth.js";

export const authRouter = () => {
  const authRouter = Router();

  const controller = new AuthController();

  authRouter.post("/access_token", controller.createToken);

  return authRouter;
};
