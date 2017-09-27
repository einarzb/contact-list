
//npm packages requirements
var express = require('express');
var port = 3000;
var app = express();

//middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(port, function() {
  console.log("server listens on port: " + port + "\n SEARCH NO MORE - I'm Your Developer")
});
