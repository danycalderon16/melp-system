import mysql from "mysql2/promise";
import { keys } from "../config/keys.js";

const connection = await mysql.createConnection(keys);

console.log("Successful connection to MySQL database");

export default connection;
