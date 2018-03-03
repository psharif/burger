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
		var query = "INSERT INTO ? SET ?";
		connection.query(query, [table, newBurger], function(err, result){
			if(err){
				console.log(err);
			}
			callback(result);
		});
	},
	//array example [{devoured: true},{id: burgerId}]
	updateOne: function(table, columnArray, callback){ 
		var query = "UPDATE ? SET ? WHERE ?";
		connection.query(query, [table, columnArray], function(err, result){
			if(err){
				console.log(err);
			}
			callback(result);
		});
	}
}

module.exports = orm; 