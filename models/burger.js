var orm = require('../config/orm.js');

var burger = {
	getAllBurgers: function(callback){
		orm.selectAll('burger', function(res){
			callback(res);
		});
	},
	insertBurger: function(burger, callback){
		orm.insertOne('burger', burger, function(res){
			callback(res);
		});
	},
	updateBurger: function(burger, callback){
		orm.updateOne('burger', ['burger', [{devoured: burger.devoured}, {id: burger.id}]], function(res){
			callback(res);
		});
	}

}

module.exports = burger; 