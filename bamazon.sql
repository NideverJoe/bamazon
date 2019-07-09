DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Cheese', 'Food', 2.25, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Cucumbers', 'Food', 1.10, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Almonds', 'Food', 8.00, 5000);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Snuggie', 'Bedding', 20, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Pillow', 'Bedding', 5, 175);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Sheets', 'Bedding', 15, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('TV', 'Entertainment', 2000, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('XBOX', 'Entertainment', 500, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('PS4', 'Entertainment', 450, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('SWITCH', 'Entertainment', 300, 1);

USE bamazon_db;
SELECT * FROM products WHERE department_name IS "Food"