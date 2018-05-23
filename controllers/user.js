const connection = require('../dbconnection')
const uniqid = require('uniqid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    registrasi: (req, res, next) => {
        const user = {
            nama : req.body.nama,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10)
        }
        // TODO : cek uniqid ke DB
        const query = 'INSERT INTO USER VALUES ("'+uniqid.time()+'","'+user.nama+'","'+user.email+'","'+bcrypt.hashSync(req.body.password, 9)+'", NOW())'
        connection.query(query, (err, result, fields) => {
            if(err){
                throw err;
            } else {
                res.status(201).json({
                    message : ""+user.email+" berhasil melakukan registrasi",
                    // result
                });
            }
        })
    },

    login: (req, res, next) => {
        const user = {
            email : req.body.email,
            password : req.body.password
        }
        cekUser = 'SELECT CAST(user_id AS CHAR) AS user_id, user_email, CAST(password AS CHAR) AS password FROM user WHERE user_email LIKE "'+user.email+'"'
        
        connection.query(cekUser, (err, result, fields) => {
            const hash = result[0].password;

            if (result.length == 1) {
                bcrypt.compare(user.password, hash, (error, respon) => {
                    if(respon) {
                    // Passwords match
                        const token = jwt.sign({user: result[0]}, 'secret', {expiresIn: 7200});
                        res.status(201).json({
                            message: "Login Berhasil",
                            token: token,
                            userId: result[0].user_id
                        })
                    } else {
                    // Passwords don't match
                        res.status(203).json({
                            message: "maaf email atau password salah"
                        })
                    } 
                });
            } else {
                res.status(203).json({
                    message: "maaf email atau password salah"
                })
            }
        })
    }
};