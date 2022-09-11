const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
// const userController = require('../controllers/userController');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/cities', (req, res) => {
    db.query(
        `SELECT * FROM cities`,
        (err, rows) => {
            if(err) {
                return console.log(err.message);
            }

            res.send(rows);
        }
    );
});
    
router.post('/register', (req, res) => {
    console.log(req.body);
    let params = {...req.body};

    //Encrypt password first before inserting to database
    cryptPassword(req.body.password, function(err, data) {
        params.password = data

        db.query(
            `INSERT INTO users SET ?`,
            params,
            (err) => {
                if(err) {
                    return console.log(err.message);
                }
                console.log('Registration Submitted');
                res.send('Success!');
            }
        );
    });

});

cryptPassword = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
     if (err) 
       return callback(err);
 
     bcrypt.hash(password, salt, function(err, hash) {
       return callback(err, hash);
     });
   });
 };

module.exports = router;
