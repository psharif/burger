// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
	selectAll: function(table, callback){
		var query = "SELECT * FROM " + table +";"
		connection.query(query, function(err, result){
			if(err){
				console.log(err);
			}
			callback(result);
		});
	},
	//newBurger example {burger_name: burgerName, devoured: true}
	insertOne: function(table, newBurger, callback){
		var query = "INSERT INTO " + table + " SET ?";
		connection.query(query,  newBurger, function(err, result){
			if(err){
				console.log(err);
			}
			callback(result);
		});
	},
	//array example [{devoured: true},{id: burgerId}]
	updateOne: function(table, updatedBurger, callback){ 
		var query = "UPDATE " + table + " SET ? WHERE ?";
		connection.query(query, [{devoured: updatedBurger.devoured}, {id: updatedBurger.id}], function(err, result){
			if(err){
				console.log(err);
			}
			callback(result);
		});
	}
}

module.exports = orm; 