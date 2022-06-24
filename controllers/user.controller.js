const User = require('../models/user.model.js');

// save  FormData - user to mongodb

exports.save = (req , res)=>{
    console.log('Post a User: '+JSON.stringify(req.body));

    // Create a customer
    const user = new User({
        firstname : req.body.firstname ,
        lastname : req.body.lastname
    });
    
    // Save a customer in the mongodb
    user.save()
    .then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message
        });

    });

};

// fetch all users

exports.findAll = (req , res)=>{
    console.log(" fetch all user");

    User.find().then(users=>{
        res.send(users);
    }).catch(err =>{
        res.status(500).send({
            message : err.message
        });
    });
};