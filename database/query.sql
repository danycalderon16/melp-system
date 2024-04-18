CREATE DATABASE melp_system; 

USE melp_system;

CREATE TABLE Restaurants (
    id VARCHAR(255) PRIMARY KEY,
    rating INT,
    name VARCHAR(255),
    site VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    lat FLOAT,
    lng FLOAT
);

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/restaurantes.csv'
INTO TABLE Restaurants
  FIELDS TERMINATED BY ','
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES;

