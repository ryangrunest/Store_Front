# Store_Front
Store Front With Node! Track items, inventory, products, sales, and productivity from the command line / terminal.

## Setup

#### 1. Clone or Download the repository onto your local machine

#### 2. Within the command line or terminal run `npm install`, and the following packages should be installed:

* [cli-table3](https://www.npmjs.com/package/cli-table3)
* [cliui](https://www.npmjs.com/package/cliui)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)

#### 3. You will need to have a local version of MySQL running. For more information, check out the [MySQL Website](https://www.mysql.com/).

#### 4. Run the database commands within `commands.sql` to create and initialize your bamazon database. Note: you do not have to run the following command:

```
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

```
This just starts you off with some items already in your database. :)

## Introduction
Store Front has three commands:

``` 
node bamazonCustomer

node bamazonManager

node bamazonSupervisor
```

## bamazonCustomer
running `node bamazonCustomer ` allows the user to see what items are for sale in the database, then asks the user which item they would like to purchase and the amount they would like to purchase. If there isn't enough inventory, the user will be told so, and then asked to purchase another product. If successful, the app will log the total cost of the sale, finale the sale, and console.log('SUCCESS') if the purchase was successful. This removes the quantity from the database.  

---

## bamazonManager
running `node bamazonManager` prompts the user with a list of commands: 

![Image of Responses](/images/ssmanager.png)

#### View Products
Returns a list of all of the products and their Item ID's, Item Names, Price, and Quantity. 

#### View Low Inventory
Returns a list of all products with quantity lower than 5.

#### Add To Inventory
Allows the user to add new inventory to one of the products in the database. 

#### Add New Product
Allows the user to add a new product to the database. 

#### Exit
Exits the program. May or may not delete your hard drive... 

---

## bamazonSupervisor

running `node bamazonSupervisor` allows the user to select from 3 commands:

![Image of Responses](/images/sssupervisor.png)


#### View Product Sales By Department
Returns a table of department with their department ID, Department Name, Overhead Costs, Product Sales, and Total Profit of the  department. 

#### Create New Department
Allows the user to create a new department, i.e dragons, furniture, etc.

#### Exit
Exits the program. This one **definitely** doesn't delete your hard drive. 


# Copyright
(C) Ryan Grunest. All Rights Reserved