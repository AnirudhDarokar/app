module.exports = function (app) {

    var express = require("express");
    var router = express.Router();

    const users = require('../controllers/user.controller.js');

    var path = __basedir + '/views/';

    router.use(function (req, res,next) {
        console.log("/" + req.method);
        next();
    });

    app.get('/', (req, res) => {
        res.sendFile(path + "index.html");
    });

    // save a user to mongodb
    app.post('/api/users/save', users.save);

    //retrive all users
    app.get('/api/users/all', users.findAll);

    app.use("*", (req, res) => {
        res.sendFile(path + "404.html");
    });



}