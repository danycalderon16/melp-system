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
}
