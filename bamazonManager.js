const mysql = require('mysql');
const inquirer = require('inquirer');

// init connection variable
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database: 'bamazon'
  });
// list a set of menu options
main = () => {
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'userRoute',
            message: 'Choose from the following commands:',
            choices: ['View Products', 'View Low Inventory', 'Add To Inventory', 'Add New Product']
        }
    ]).then(answers => {
        
        if (answers.userRoute === 'View Products') {
            console.log('Viewing products');
        } else if (answers.userRoute === 'View Low Inventory') {
            console.log('low inv');
        } else if (answers.userRoute === 'Add To Inventory') {
            console.log('add inv');
        } else if (answers.userRoute === 'Add New Product') {
            console.log('add new prodicut');
        }
    })
}


// view products for sale
// listse very abvailable item: ids, names,prices, quantities

// view low inventory
// list all inventory with count lower than 5

// add to inventory
// lets the manager add more of an item to the store

// add new product
// add new product to store

main();