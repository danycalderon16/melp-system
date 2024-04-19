export const keys = {
  host: process.env.HOST_SQL_DATABASE || "localhost",
  port: process.env.PORT_SQL_DATABASE || 3306,
  user: process.env.USER_SQL_DATABASE || "root",
  password: process.env.PASSWORD_SQL_DATABASE || "root",
  database: process.env.NAME_SQL_DATABASE || "melp_system",
};
