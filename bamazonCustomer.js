let mysql = require('mysql');
let inquirer = require('inquirer');

// init connection variable
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database: 'bamazon'
  });

placeOrder = (idVal, pCount) => {
    idVal = parseInt(idVal);
    pCount = parseInt(pCount);
    console.log(idVal, pCount);
    if (isNaN(idVal) || isNaN(pCount)) {
        console.log('Must enter a number! Returning to main program...');
        initialPrompts();
    };
};

initialPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'idVal',
            message: 'Please enter the ID of the item you would like to purchase:'
        },
        {
            type: 'input',
            name: 'purchaseCount',
            message: 'Please enter the amount you would like to purchase:'
        }
    ]).then(answers => {
        placeOrder(answers.idVal, answers.purchaseCount);
    });
}

// when run, displays a table of all products for sale
main = () => {
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        connection.query('SELECT * FROM `products`', function (error, results, fields) {
            // error will be an Error if one occurred during the query
            if (error) console.log(error);
            // results will contain the results of the query
            console.log(results, fields);
            // fields will contain information about the returned results fields (if any)
          });
        
        console.log('connected as id ' + connection.threadId);
        // then prompts the user with two messages: what they want to buy and how many
        initialPrompts();    
    
        connection.end();
    });
}


    



// app checks to see if product is available
// if not, log to the user

// if  it  does...
// update the SQL database, show the customer the total cost of purchase

main();