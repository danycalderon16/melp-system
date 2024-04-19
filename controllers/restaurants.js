import { v4 as uuidv4 } from "uuid";

import connection from "../model/db.js";

export class RestaurantController {
  getStats = async (req, res) => {
    try {
      const { latitude, longitude, radius } = req.query;

      const data = await connection.query(
        `SELECT 
              COUNT(*) as count_restaurants,
              AVG(r.rating) as average_raitign,
              STD(r.rating) as standar_desviation
          FROM restaurants r
          WHERE ST_Distance_Sphere(
              POINT(r.lng, r.lat), 
              POINT(?, ?)
          ) < ?;`,
        [longitude, latitude, radius]
      );

      return res.status(200).json(data[0][0]);
    } catch (error) {
      console.error("Error getting statistics:", error);
      return res.status(500).json({ error: "Error getting statistics" });
    }
  };

  getAll = async (req, res) => {
    try {
      const restaurants = await connection.query("SELECT * FROM restaurants");

      return res.status(200).json({ restaurants });
    } catch (error) {
      console.error("Error getting all restaurants:", error);
      return res.status(500).json({ error: "Error getting all restaurants" });
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
      console.error("Error getting one restaurant:", error);
      return res.status(500).json({ error: "Error getting one restaurant" });
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

      return res.status(201).json({
        message: "The restaurant was successfully created",
        id,
        createdRestaurant: restaurant,
      });
    } catch (error) {
      console.error("Error creating restaurant:", error);
      return res.status(500).json({ error: "Error creating restaurant" });
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
      if (restaurant[0].affectedRows === 0) {
        return res.status(404).json({ error: "Restaurant not found" });
      }

      return res.status(200).json({
        message: "The restaurant was successfully updated",
        updatedRestaurant: restaurant,
      });
    } catch (error) {
      console.error("Error updating restaurant:", error);
      return res.status(500).json({ error: "Error updating restaurant" });
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

      return res.status(200).json({
        message: "The restaurant was successfully deleted",
        deletedRestaurant: restaurant,
      });
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      return res.status(500).json({ error: "Error deleting restaurant" });
    }
  };
}
