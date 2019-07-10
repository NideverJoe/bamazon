/////////////////////////
//DEPENDENCIES//
/////////////////////////

var mysql = require("mysql");
var inquirer = require('inquirer');

/////////////////////////
//Global Variables//
/////////////////////////
var useritem = 0;
var userquantity = 0;
var databaseres;

/////////////////////////
//DISPLAY DATABASE INVENTORY//
/////////////////////////

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iamr00t",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });

  function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("Welcome to BAMAZON-CLI!")
    console.table(res);
    databaseres = res;
    // console.log(res);
    userinput();
  });
}
/////////////////////////
//ASK USER FOR PURCHASE INFO//
/////////////////////////
function userinput(){
inquirer
  .prompt([
    {
        type: "input",
        name: "productID",
        message: "Which product would you like to purchase?"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"
      },
  ])
  .then(function(purchase) {

    useritem = purchase.productID;
    userquantity= purchase.quantity;
    console.log(`You chose to purchase ${userquantity} ${databaseres[useritem-1].product_name}(s).`);
    checkforquantity();

  })};
  
/////////////////////////
//CONDITIONAL TO CHECK FOR QUANTITY//
/////////////////////////
function checkforquantity()
{if (userquantity <= databaseres[useritem-1].stock_quantity){
  displaypurchaseprice();
  updatequantity();
} else {
console.log("Insufficient quantity!")
console.log(`We're sorry, but we do not have ${userquantity} ${databaseres[useritem-1].product_name}(s).`)
connection.end();
}}

/////////////////////////
//FULFILL ORDER AND UPDATE DATABASE WITH NEW QUANTITY//
//SHOW USER PURCHASE TOTAL//
/////////////////////////

function updatequantity(){

    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: (databaseres[useritem-1].stock_quantity) - userquantity
        },
        {
          item_id: useritem
        }
      ],
      function(err, res) {
        if (err) throw err;
        // console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        // deleteProduct();
      }
    );
    // console.log(query.sql);
    console.log(`Thank you for shopping with us at BAMAZON-CLI!`)
    connection.end();

  }

function displaypurchaseprice(){
  var totalpurchase = userquantity * databaseres[useritem-1].price
  console.log(`Thank you for your purchase! Your total is $${totalpurchase}!`)

}