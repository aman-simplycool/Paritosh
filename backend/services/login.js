const express = require("express");
const router = express.Router();
const users = require("../model/users");
const officials = require("../model/official");


/// login part
//veryfying from users and officals collection
router.get('/login', async (req, res) => {
    const { email, name, type } = req.body();
    //if the user if common man
    if (type == 'user') {
        users.find({ email: email }, (err, docs) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ "msg": "something went wrong" });
            }
            else {
                console.log(docs);
                return res.status(200).send({ "msg": "sucessfully signed in" });
            }
        })
    }
    //if some official logs in
    else {
        officials.find({ email: email }, (err, docs) => {
            if (err) {
                console.log(err);
                return res.status(400).send({ "msg": "something went wrong" });
            }
            else {
                console.log(docs);
                return res.status(200).send({ "msg": "sucessfully signed in" });
            }
        })
    }
})



