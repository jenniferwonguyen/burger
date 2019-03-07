//import orm.js into burger.js
var orm = require("../config/orm.js")

var burger = {
    //display burgers in db
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //add new burger
    insertOne: function(cols,vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //change devour status
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    //delete burger from db
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
            });
        }
    };

    module.exports = burger;

