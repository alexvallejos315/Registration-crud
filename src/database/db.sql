CREATE DATABASE register_school;
USE register_school;
CREATE TABLE register_students(
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 last_name VARCHAR(50) NOT NULL,
 email VARCHAR(50) NOT NULL,
 phone VARCHAR(15),
 address VARCHAR(100) NOT NULL
);
SHOW TABLES;
DESCRIBE register_students;