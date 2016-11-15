
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
var pics=[
	new Item ("https://images-na.ssl-images-amazon.com/images/I/61LRryne08L._SX385_BO1,204,203,200_.jpg", 'Un monstruo viene a verme','14,20'),
	new Item ("https://images-na.ssl-images-amazon.com/images/I/51Uzj2WnFgL._SX339_BO1,204,203,200_.jpg", 'El hogar de miss Peregrine para niños peculiares', '11.90'),
    new Item ("https://images-na.ssl-images-amazon.com/images/I/414bDU0icmL._SX326_BO1,204,203,200_.jpg",'Los renglones torcidos de dios','8,50'),
    new Item ("https://images-eu.ssl-images-amazon.com/images/I/41YmPJAPueL.jpg",'El principito', '6,65'),
    new Item ("https://images-na.ssl-images-amazon.com/images/I/51hFJvNRW0L._SX327_BO1,204,203,200_.jpg",'It','10,93'),
    new Item ("https://images-na.ssl-images-amazon.com/images/I/51P-1VHhybL._SX359_BO1,204,203,200_.jpg", 'Chico y Rita', '20,90'),
    new Item ("https://images-eu.ssl-images-amazon.com/images/I/51TRL-eZrDL.jpg",'Veronika decide morir','10,40'),
    new Item ("https://images-na.ssl-images-amazon.com/images/I/51PDT3PIj9L._SX336_BO1,204,203,200_.jpg", 'Perros e hijos de perra','25,85')
];

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{pics:pics});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


