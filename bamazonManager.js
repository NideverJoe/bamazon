/////////////////////////
//DEPENDENCIES//
/////////////////////////

var mysql = require("mysql");
var inquirer = require('inquirer');

/////////////////////////
//Global Variables//
/////////////////////////
var actionchoice;
var databaseres;

/////////////////////////
//Connect to Database//
/////////////////////////

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iamr00t",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    manageractionchoice();
});

/////////////////////////
//Choose/Define Manager Function//
/////////////////////////

function manageractionchoice() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    'View Products for Sale',
                    'View Low Inventory',
                    'Add to Inventory',
                    'Add New Product',
                    '<<< Disconnect Manager >>>'
                ]
            },
        ])
        .then(choice => {
            actionchoice = choice.action

            if (actionchoice == "View Products for Sale") {
                inventorydisplay();
            }
            if (actionchoice == "View Low Inventory") {
                lowinventorydisplay();
            }
            if (actionchoice == "Add to Inventory") {
                addinventory();
            }
            if (actionchoice == "Add New Product") {
                newproduct();
            }
            if (actionchoice == "<<< Disconnect Manager >>>") {
                connection.end();
            }
        })
};

/////////////////////////
//DISPLAY DATABASE INVENTORY//
/////////////////////////

function inventorydisplay() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        databaseres = res;
        // console.log(res);
        manageractionchoice();
    });
}

/////////////////////////
//DISPLAY LOW INVENTORY//
/////////////////////////

function lowinventorydisplay() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 6", function (err, res) {
        if (err) throw err;
        console.table(res);
        databaseres = res;
        // console.log(res);
        manageractionchoice();
    });
}

/////////////////////////
//ADD TO INVENTORY//
/////////////////////////

function addinventory() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'addinventoryitemi',
                message: 'Which product inventory do you wish to increase?'
            },
            {
                type: 'input',
                name: 'addinventoryquantityi',
                message: 'How many?'
            },
        ])
        .then(addinventory => {
            addinventoryitem = addinventory.addinventoryitemi;
            addinventoryquantity = addinventory.addinventoryquantityi;

            connection.query(`UPDATE products SET stock_quantity = stock_quantity + 
    ${addinventoryquantity} WHERE ?`,
                [
                    {
                        product_name: addinventoryitem
                    }
                ],

                function (err, res) {
                    if (err) throw err;
                    console.table(res.message);
                    console.log("Table above means it worked!")
                    databaseres = res;
                    // console.log(res);
                    manageractionchoice();
                });
        })
}

/////////////////////////
//ADD NEW PRODUCT//
/////////////////////////

function newproduct() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newproductnamei',
                message: 'New Product: NAME'
            },
            {
                type: 'input',
                name: 'newproductdepartmenti',
                message: 'New Product: DEPARTMENT'
            },
            {
                type: 'input',
                name: 'newproductpricei',
                message: 'New Product: PRICE'
            },
            {
                type: 'input',
                name: 'newproductquantityi',
                message: 'New Product: QUANTITY'
            },
        ])
        .then(newproduct => {
            newproductname = newproduct.newproductnamei;
            newproductdepartment = newproduct.newproductdepartmenti;
            newproductprice = newproduct.newproductpricei;
            newproductquantity = newproduct.newproductquantityi;


            //attempt 1
            connection.query(`INSERT INTO products (product_name, department_name, price, stock_quantity) values ("${newproductname}","${newproductdepartment}",${newproductprice}, ${newproductquantity});`, 
            function(err){
if(err) console.log(err)
            })


            // attempt 2
            // connection.query(`INSERT INTO products
            //        ([product_name]
            //        ,[department_name]
            //        ,[price]
            //        ,[stock_quantity])
            //  VALUES
            //         (${newproductname}, 
            //         ${newproductdepartment}, 
            //         ${newproductprice}, 
            //         ${newproductquantity})`,

            //attempt 3
    //         connection.query(`INSERT INTO products
    //         (product_name: 
    //         ,[department_name]
    //         ,[price]
    //         ,[stock_quantity])
    //   VALUES
    //          (${newproductname}, 
    //          ${newproductdepartment}, 
    //          ${newproductprice}, 
    //          ${newproductquantity})`,

                // function (err, res) {
                //     if (err) throw err;
                //     console.table(res);
                //     databaseres = res;
                //     // console.log(res);
                    manageractionchoice();
                });
        }
