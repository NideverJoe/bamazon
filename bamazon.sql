DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Cheese', 'Food', 2.25, 150),
 ('Cucumbers', 'Food', 1.99, 300),
 ('Almonds', 'Food', 8.00, 5000),
 ('Snuggie', 'Bedding', 20, 50),
 ('Pillow', 'Bedding', 5, 175),
 ('Sheets', 'Bedding', 15, 25),
 ('TV', 'Entertainment', 2000, 10),
 ('XBOX', 'Entertainment', 500, 5),
 ('PS4', 'Entertainment', 450, 5),
 ('SWITCH', 'Entertainment', 300, 1);