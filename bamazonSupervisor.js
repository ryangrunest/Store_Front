const mysql = require('mysql');
const inquirer = require('inquirer');
var ui = require('cliui')({
    width: 80
})

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cheese',
    database : 'bamazon'
});
CreateNewDepartment = () => {
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
            console.log('view product sales')
            main();
        } else if (response.userRoute === 'Create New Department') {
            CreateNewDepartment();
        } else if (response.userRoute === 'Exit') {
            console.log('Program Ended');
            connection.end();
        }
    });
}

main();