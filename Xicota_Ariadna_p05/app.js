
var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));

//articles
var pics={

}

// Render frontpage
app.get('/', function (req, res) {
    res.render('base',{
	pics:pics
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


