let mysql = require('mysql');
let inquirer = require('inquirer');

// init connection variable
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database: 'bamazon'
  });

placeOrder = (idVal, pCount, initCount) => {
    idVal = parseInt(idVal);
    pCount = parseInt(pCount);
    initCount = parseInt(initCount);
    // console.log(idVal, pCount, initCount);
    if (isNaN(idVal) || isNaN(pCount) || isNaN(initCount)) {
        console.log('Must enter a number! Returning to main program...');
        initialPrompts();
    };
    // app checks to see if product is available
    if ((initCount - pCount) >= 0) {
        newCount = initCount - pCount;
        // update the SQL database, show the customer the total cost of purchase
        connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [newCount, idVal], function (e, r, f) {
            if (e) console.log(e);
            });
            connection.query({
                sql: 'SELECT * FROM `products` WHERE `item_id` = ?',
                values: [idVal]
            }, (error, results, fields) => {
                if (error) throw console.log(error);
                console.log('Finalizing Sale...');
                setTimeout(() => {
                    console.log(`Purchased ${pCount} ${results[0].product_name}s for a total of $${pCount * parseInt(results[0].price)}.`);
                    connection.end();
                }, 2000);
            });
    } else if ((initCount - pCount) < 0)  {
        console.log('Not enough quantity, please try again with a lower amount');
        initialPrompts();
    }
    
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
        connection.query({
            sql: 'SELECT * FROM `products` WHERE `item_id` = ?',
            values: [answers.idVal]
        }, (error, results, fields) => {
            if (error) throw console.log(error);
            let initCount = results[0].stock_quantity;
            placeOrder(answers.idVal, answers.purchaseCount, initCount);
        });
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
            console.log('Items For Sale:');
            console.log('----------------------------------------------');
            console.log('| ITEM ID | ITEM NAME | DEPARTMENT | PRICE |');
            console.log('----------------------------------------------');
            for (var i = 0; i < results.length; i++) {
                console.log(`| ${results[i].item_id} | ${results[i].product_name} | ${results[i].department_name} | $${results[i].price} |`);
                console.log('----------------------------------------------');
            };
            console.log('| ITEM ID | ITEM NAME | DEPARTMENT | PRICE |');
            console.log('----------------------------------------------');
          });

        // then prompts the user with two messages: what they want to buy and how many
        setTimeout(initialPrompts, 1000);
    

    });
}

main();