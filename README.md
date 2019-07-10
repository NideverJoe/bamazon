# bamazon   ---  CLI APP

## Purpose
#### Simlulates a storefront experience in the CLI. 

## Technologies Used
* javascript
* SQL Database
* mySQL.js
* inquirer.js
  
## Overview
### Customer View
* Table of inventory appears. (Data pulled from SQL)\
* Customer chooses which item they wish to purchase by item_id
* Customer chooses how many they wish to purchase.
* (If the desired quantity is not available, an error message is shown to user.)
* Total price is shown and the quantity is reduced in database.

### Manager View
* Loads and then waits for manager input
 * View Products for Sale - Displays table of full inventory
 * View Low Inventory - Displays table of inventory items with a quantity 5 or below
 * Add to Inventory - Allows manager to add items to inventory for an existing item
 * Add New Product - Allows manager to create a new item and specify all table

### Customer View in Action
![minimum](https://user-images.githubusercontent.com/50809345/60908747-3effbf00-a242-11e9-88eb-79b047aec0fc.gif)

### Manager View in Action  
![bamazon_manager](https://user-images.githubusercontent.com/50809345/60975373-8002dc80-a2f1-11e9-906b-cb9ba8e4b067.gif)
