DROP DATABASE IF EXISTS burger_db; 
CREATE DATABASE burger_db;

use burger_db;
create table burgers (
  id INT NOT NULL AUTO_INCREMENT,  
  burger_name  VARCHAR(45) NOT NULL,
  devoured boolean DEFAULT false,
  
  PRIMARY KEY (id)
);
