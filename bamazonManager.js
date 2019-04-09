const mysql = require('mysql');
const inquirer = require('inquirer');
var ui = require('cliui')({
    width: 80
  })

// init connection variable
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database: 'bamazon'
  });

resetProgram = () => {
    console.log(ui.toString());
    ui.resetOutput();
    connection.end();
    setTimeout(main, 2000);
}


// view products for sale
// lists available item(s): ids,names,prices,quantities
viewProducts = () => {
    connection.query('SELECT * FROM `products`', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        if (error) console.log(error);
        //results will contain the results of the query
        ui.div({
                text: '| ITEM ID |',
                width: 20},{
                text: '| ITEM NAME |',
                width: 20},{
                text: '| PRICE |',
                width: 20},{
                text: '| QUANTITY |',
                width: 20});
        for (var i = 0; i < results.length; i++) {
            ui.div({
                text: results[i].item_id,
                width: 20}, {
                text: results[i].product_name,
                width: 20}, {
                text: `$${results[i].price}`,
                width: 20}, {
                text: results[i].stock_quantity,
                width: 20})
        };
        resetProgram();
      });
};

// list all inventory with count lower than 5
viewLowInventory = () => {
    connection.query('SELECT * FROM products WHERE stock_quantity < 5;', (err, res, fds) => {
        if (err) return console.log(err);
        ui.div({text: 'ALL ITEMS WITH LESS THAN 5 QUANTITY:',width: 80 })
        ui.div({
            text: '| ITEM NAME |',
            width: 40 },{
            text: '| QUANTITY |',
            width: 40 })
        for (var i = 0; i < res.length; i++) {
            ui.div(
                {
                    text: res[i].product_name,
                    width: 40
                }, {
                    text: res[i].stock_quantity,
                    width: 40
                }
            )
        };
        resetProgram();
    })
}

addInventory = () => {

}

// add to inventory
// lets the manager add more of an item to the store
addProduct = ()  => {
    inquirer.prompt([
        {
            name: 'inpName',
            message: 'Product Name:'
        }, {
            name: 'inpDep',
            message: 'Department: '
        }, {
            name: 'inpPrice',
            message: 'Price: '
        }, {
            name: 'inpQuant',
            message: 'Quantity: '
        }
    ]).then((answers) => {
        console.log(answers.inpName)
        connection.query(`INSERT INTO products(product_name, department_name, price, stock_quantity)
         VALUES ('${answers.inpName}', '${answers.inpDep}', ${parseInt(answers.inpPrice)}, ${parseInt(answers.inpQuant)});`
         ,(err,res,fds) => {
            if (err) return console.log(err);
            console.log('Product Added Successfully!');
        });
        resetProgram();
    })   
}

main = () => {
    // list a set of menu options
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'userRoute',
            message: 'Choose from the following commands:',
            choices: ['View Products', 'View Low Inventory', 'Add To Inventory', 'Add New Product', 'Exit']
        }
    ]).then(answers => {
        if (answers.userRoute === 'View Products') {
            viewProducts();
        } else if (answers.userRoute === 'View Low Inventory') {
            viewLowInventory();
        } else if (answers.userRoute === 'Add To Inventory') {
            
        } else if (answers.userRoute === 'Add New Product') {
            addProduct();
        } else {
            count = 2;
            console.log('Deleting Hard Drive in 3...');
            timer = setInterval(() => {
                console.log(`${count}...`);
                count--;
            }, 1000);
            setTimeout(() => {
                clearInterval(timer);
                console.log('Program Ended.');
            }, 4000)    
        }
    })
}








// add new product
// add new product to store

main();