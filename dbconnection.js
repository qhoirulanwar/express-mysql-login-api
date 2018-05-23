var mysql = require('mysql');  
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : ''
});

connection.connect( (err) => {
    if(err){
        console.log('something wrong mysql database connection on dbconnection.js');
        connection.end();
    }
});

module.exports = connection;