import express, { json } from "express";
import "dotenv/config";

import { authRouter } from "./routes/auth.js";
import { restaurantRouter } from "./routes/restaurants.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/auth", authRouter());
app.use("/api/restaurants", restaurantRouter());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
