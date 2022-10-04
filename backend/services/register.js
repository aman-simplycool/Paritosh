const express = require('express');
const router = express.Router();
const regData = require("../model/users")
const offial = require("../model/official");
const { userInfo } = require('os');


//validate data coming from frontend 
//whethe it is present in users table or officals table


router.post('/login', (req, res) => {
    const type = req.body.type;
    const email = req.body.email;
    if (type == "user") {
        if (userInfo.find({ email, email }, (err, docs) => {
            if (docs) {
                console.log(docs);
                return res.status(200).send({ "msg": "sucessfully sighned in" });
            }
            else{
               console.log(err);
               return res.status(400).send({"err":"wrong information required"}); 
            }
        }));
    }
    else if (type == "official") {
        if (offial.find({ email: email }, (err, docs) => {
            if (docs) {
                return res.status(200).send({ "msg": "sucessfully logged in" });

            }
            else {
                console.log(err);
                return res.status(401).send({ "msg": "invalid information" });
            }
        }));
    }
})

