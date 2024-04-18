import mysql from "mysql2/promise";
const config = {
  host: process.env.HOST_SQL_DATABASE,
  port: process.env.PORT_SQL_DATABASE,
  user: process.env.USER_SQL_DATABASE,
  password: process.env.PASSWORD_SQL_DATABASE,
  database: process.env.NAME_SQL_DATABASE,
};

const connection = await mysql.createConnection(config);

console.log("Conexión exitosa a la base de datos MySQL");

export default connection;
