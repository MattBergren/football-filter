var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require('method-override');

// mongoose.connect("mongodb://localhost/todo_app");
// mongoose.connect("mongodb://bergy:password@ds215089.mlab.com:15089/todo-ajax");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(methodOverride('_method'));


app.get("/", function (req, res) {
    res.render("index");
});



app.listen(3000, function () {
    console.log('Server running on port 3000');
});