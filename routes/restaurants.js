import { Router } from "express";
import { RestaurantController } from "../controllers/restaurants.js";
import verifyToken from "../middlewate/verifyToken.js";

export const restaurantRouter = () => {
  const restaurantRouter = Router();

  const controller = new RestaurantController();

  restaurantRouter.get("/statistics", verifyToken, controller.getStats);
  restaurantRouter.get("/", verifyToken, controller.getAll);
  restaurantRouter.get("/:id", verifyToken, controller.getOne);
  restaurantRouter.post("/", verifyToken, controller.create);
  restaurantRouter.delete("/:id", verifyToken, controller.delete);
  restaurantRouter.put("/:id", verifyToken, controller.update);

  return restaurantRouter;
};
