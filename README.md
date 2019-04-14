# Store_Front
Store Front With Node!

## Setup

#### 1. Clone or Download the repository onto your local machine

#### 2. Within the command line or terminal Run npm install, and the following packages should be installed:

* [cli-table3](https://www.npmjs.com/package/cli-table3)
* [cliui](https://www.npmjs.com/package/cliui)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)

## NOTICE
## You will need to retrieve API keys for [spotify](https://developer.spotify.com/dashboard/login), [bandsintown](https://manager.bandsintown.com/), and [OMDB](http://www.omdbapi.com/).

#### 3. Create a file named keys.js and store it somewhere safe (you will need to reference it):

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