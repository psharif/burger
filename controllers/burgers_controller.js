var express = require("express"); 
var router = express.Router();

//Importing burger model from burger.js file
var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.getAllBurgers(function(data){
		var burgerObject = {
			burger: data
		}
		console.log(burgerObject);
		res.render("index", burgerObject);
	});
});
//Pass a burger object to the post route.
router.post("/api/burgers", function(req, res){
	burger.insertBurger(
	{
		burger_name: req.body.burgerName,
		devoured: req.body.devoured
	},
	function(result){
		// Send back the ID of the new burger
    	res.json({ id: result.insertId });
	});
});

router.put("/api/cats/:id", function(req, res){
	burger.updateOne({
		id: req.params.id, 
		devoured: req.body.devoured
	}, function(result){
		if (result.changedRows == 0) {
      		// If no rows were changed, then the ID must not exist, so 404
      		return res.status(404).end();
    	} 
    	else {
    		console.log(result.changedRows, " Rows Changed.");
      		res.status(200).end();
    	}
	});
});

module.exports = router; 