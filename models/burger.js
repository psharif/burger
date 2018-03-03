var orm = require('../config/orm.js');

var burger = {
	getAllBurgers: function(callback){
		orm.selectAll('burger', function(res){
			callback(res);
		});
	},
	insertBurger: function(newBurger, callback){
		orm.insertOne('burger', newBurger, function(res){
			callback(res);
		});
	},
	updateBurger: function(updatedBurger, callback){
		orm.updateOne('burger', updatedBurger, function(res){
			callback(res);
		});
	}

}

module.exports = burger; 