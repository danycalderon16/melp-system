import { Router } from "express";
import { RestaurantController } from "../controllers/restaurants.js";
import verifyToken from "../middlewate/verifyToken.js";

export const restaurantRouter = () => {
  const restaurantRouter = Router();

  const controller = new RestaurantController();

  restaurantRouter.get("/", verifyToken, controller.getAll);
  restaurantRouter.get("/:id", verifyToken, controller.getOne);
  restaurantRouter.post("/", verifyToken, controller.create);

  return restaurantRouter;
};
