import express, { json } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

import { authRouter } from "./routes/auth.js";
import { restaurantRouter } from "./routes/restaurants.js";

const PORT = process.env.PORT || 3456;

const app = express();

app.use(json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/auth", authRouter());
app.use("/api/restaurants", restaurantRouter());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
