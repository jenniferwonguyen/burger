const express = require("express");
// Import the model to use its db functions for burger.js
const burger = require("../models/burger.js");

//create router for app
const router = express.Router();

//create routes and setup logic
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//add new burger to db
router.post("/api/burgers", function (req, res) {
    console.log("what we save", req.body)
    burger.insertOne(["burger_name", "devoured"], [req.body.name, 0], function (result) {
       //send back new burger id
       res.json({ id: result.insertId });
    });
});

//set devour status || true
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devour }, condition, function(result){
        console.log("about to send to front end", result )
        res.json(result)
       if (result.changedRows === 0) {
           return res.status(404).end();
       } else {
           res.status(200).end();
       }
    });
});

//delete burger from db
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }

    });
});


module.exports = router;