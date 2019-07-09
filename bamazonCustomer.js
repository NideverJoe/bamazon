/////////////////////////
//DEPENDENCIES//
/////////////////////////

var mysql = require("mysql");
var inquirer = require('inquirer');


/////////////////////////
//DISPLAY DATABASE INVENTORY//
/////////////////////////

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Iamr00t",
    database: "playlistDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });

  function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
/////////////////////////
//ASK USER FOR PURCHASE INFO//
/////////////////////////
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
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });