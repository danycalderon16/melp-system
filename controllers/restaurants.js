import { v4 as uuidv4 } from "uuid";

import connection from "../model/db.js";

export class RestaurantController {
  getAll = async (req, res) => {
    try {
      const restaurants = await connection.query("SELECT * FROM restaurants");

      return res.status(200).json({ restaurants });
    } catch (error) {
      console.error("Error al obtener restaurantes:", error);
      return res.status(500).json({ error: "Error al obtener restaurantes" });
    }
  };

  getOne = async (req, res) => {
    try {
      const restaurant = await connection.query(
        "SELECT * FROM restaurants WHERE id = ?",
        [req.params.id]
      );

      if (!restaurant[0][0]) {
        return res.status(404).json({ error: "Restaurant not found" });
      }

      return res.status(200).json({ restaurant: restaurant[0] });
    } catch (error) {
      console.error("Error al obtener restaurant:", error);
      return res.status(500).json({ error: "Error al obtener restaurant" });
    }
  };

  create = async (req, res) => {
    try {
      const id = uuidv4();
      const {
        rating,
        name,
        site,
        email,
        phone,
        street,
        city,
        state,
        lat,
        lng,
      } = req.body;
      const restaurant = await connection.query(
        "INSERT INTO restaurants (id, rating, name, site, email, phone, street, city, state, lat, lng) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [id, rating, name, site, email, phone, street, city, state, lat, lng]
      );

      return res.status(201).json({ id, restaurant });
    } catch (error) {
      console.error("Error al crear restaurant:", error);
      return res.status(500).json({ error: "Error al crear restaurant" });
    }
  };

  update = async (req, res) => {
    try {
      const {
        rating,
        name,
        site,
        email,
        phone,
        street,
        city,
        state,
        lat,
        lng,
      } = req.body;
      const restaurant = await connection.query(
        "UPDATE restaurants SET rating = ?, name = ?, site = ?, email = ?, phone = ?, street = ?, city = ?, state = ?, lat = ?, lng = ? WHERE id = ?",
        [
          rating,
          name,
          site,
          email,
          phone,
          street,
          city,
          state,
          lat,
          lng,
          req.params.id,
        ]
      );
      return res.status(200).json({ restaurant });
    } catch (error) {
      console.error("Error al actualizar restaurant:", error);
      return res.status(500).json({ error: "Error al actualizar restaurant" });
    }
  };

  delete = async (req, res) => {
    try {
      const restaurant = await connection.query(
        "DELETE FROM restaurants WHERE id = ?",
        [req.params.id]
      );

      if (restaurant[0].affectedRows === 0) {
        return res.status(404).json({ error: "Restaurant not found" });
      }

      return res.status(200).json({ restaurant });
    } catch (error) {
      console.error("Error al eliminar restaurant:", error);
      return res.status(500).json({ error: "Error al eliminar restaurant" });
    }
  };
}
