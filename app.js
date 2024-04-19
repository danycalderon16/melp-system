import express, { json } from "express";
import "dotenv/config";

import { authRouter } from "./routes/auth.js";
import { restaurantRouter } from "./routes/restaurants.js";

const PORT = process.env.PORT || 3456;

const app = express();

app.use(json());

app.get("/", (req, res) => {
  return res.send(
    `<h1>Welcome to the Melp System API!</h1>
    <p>To access other routes, use Postman or another API testing tool and provide your access token.</p>`
  );
});

app.use("/auth", authRouter());
app.use("/api/restaurants", restaurantRouter());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
