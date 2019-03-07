//connect node to MySQL
const mysql = require("mysql");

if (process.env.) {
    connection = mysql.createConnection(process.env);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: "8889",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;