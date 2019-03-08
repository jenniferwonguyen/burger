const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3080;

app.use(express.static("public"));

//parse app
app.use(bodyParser.urlencoded({ extended: true }));
//parse app/json
app.use(bodyParser.json());

//set the handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});



