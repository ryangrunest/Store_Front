-- Create a MySQL Database called bamazon.
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
use bamazon;


-- Then create a Table inside of that database called products.
CREATE TABLE products (
-- item_id (unique id for each product)
item_id INT NOT NULL AUTO_INCREMENT,
-- product_name (Name of product)
product_name VARCHAR(100) NOT NULL,
-- department_name
department_name VARCHAR(35) NOT NULL,
-- price (cost to customer)
price DECIMAL(5,2) not null,
-- stock_quantity (how much of the product is available in stores)
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
)


-- Populate this database with around 10 different products.
INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'chair', 'furniture', 50.00, 12 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'table', 'furniture', 100.00, 7 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'television', 'electronics', 120, 10 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'plant', 'decoration', 7.00, 9 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'mirror', 'decoration', 25.00, 13 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'toaster', 'kitchen', 22.00, 8 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'knife set', 'kitchen', 44.00, 4 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'speakers', 'electronics', 15.00, 22 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'big plant', 'decoration', 14.00, 9 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'dresser', 'furniture', 55.00, 5 );

INSERT INTO products ( product_name, department_name, price, stock_quantity )
   VALUES
   ( 'dish drainer', 'kitchen', 10, 3 );




 use bamazon;
-- Then create a Table inside of that database called products.
CREATE TABLE departments (
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(100) NOT NULL,
over_head_costs INT NOT NULL,
PRIMARY KEY (department_id)
)

INSERT INTO bamazon.departments ( department_name, over_head_costs )
   VALUES
   ( 'furniture', 20000 );
INSERT INTO bamazon.departments ( department_name, over_head_costs )
   VALUES
   ( 'electronics', 30000 );
INSERT INTO bamazon.departments ( department_name, over_head_costs )
   VALUES
   ( 'decoration', 5000 );
INSERT INTO bamazon.departments ( department_name, over_head_costs )
   VALUES
   ( 'kitchen', 10000 );

ALTER TABLE bamazon.products
ADD [COLUMN] product_sales VARCHAR(35) [FIRST|AFTER stock_quantity];