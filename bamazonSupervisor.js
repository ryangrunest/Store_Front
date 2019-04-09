const mysql = require('mysql');
const inquirer = require('inquirer');
var Table = require('cli-table3');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database : 'bamazon'
});
viewProductSales = () =>  {
    // instantiate
    var table = new Table({
        head: ['Department ID', 'Department Name', 'Overhead Costs', 'Product Sales', 'Total Profit']
    });
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    connection.query('SELECT * FROM departments', (error, response, fields) => {
        if (error) return console.log(error);
        for (var i = 0; i < response.length; i++) {
            let productSales = 0;
            let arr = [];
            arr.push(response[i].department_id, response[i].department_name, response[i].over_head_costs);
            connection.query(`SELECT * FROM products WHERE department_name = '${response[i].department_name}'`, (err, res, fds) => {
                if (err) return console.log(err);
                // console.log(res[0]);
                for (var a = 0; a < res.length; a++) {
                    // console.log(res[a]);
                    if (res[a].product_sales != null) {
                        // console.log(res);
                        productSales += parseInt(res[a].product_sales);
                    }
                }
                arr.push(productSales);
                table.push(arr);
            })
        }
        setTimeout(function() {
            for (var j = 0; j < table.length; j++) {
                table[j].push((table[j][3]) - table[j][2]);
            }
            console.log(table.toString());
            console.log(table[0][0]);
        }, 2800);
        setTimeout(main, 3000);
    })  
    }
createNewDepartment = () => {
    inquirer.prompt([
        {
            name: 'depName',
            message: 'Department Name:'
        }, {
            name: 'depOverHead',
            message: 'Department Overhead: '
        }
    ]).then((answers) => {
        connection.query(`INSERT INTO departments (department_name, over_head_costs) VALUES ('${answers.depName}' , ${parseInt(answers.depOverHead)});`),
        (err,res,fds) => {
            if (err) return console.log(err);  
        };
        console.log('Department Added Successfully!');
        setTimeout(main, 2000); 
    }) 
}

main = () => {
    inquirer.prompt([
        {
            name: 'userRoute',
            type: 'rawlist',
            message: 'Commands:',
            choices: ['View Product Sales By Department', 'Create New Department', 'Exit']
        }
    ]).then(response => {
        // console.log(response);
        if (response.userRoute === 'View Product Sales By Department') {
            viewProductSales();
        } else if (response.userRoute === 'Create New Department') {
            createNewDepartment();
        } else if (response.userRoute === 'Exit') {
            console.log('Program Ended');
            connection.end();
        }
    });
}

main();