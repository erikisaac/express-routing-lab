var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

router.post('/', function(req, res) {
	req.body.id = candies.length + 1;
	candies.push(req.body);
	res.json(req.body);
});

router.get('/:id', function(req, res) {
	var x = req.params.id - 1;
	res.json(candies[x]);
});

//...
router.put('/:id', function(req, res) {
	var x = req.params.id - 1;
	candies[x] = req.body;
});

// Fill out the rest of the routes here

module.exports = router;