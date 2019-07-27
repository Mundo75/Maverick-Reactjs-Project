require("dotenv").config();
require("../server");
const password = process.env.DB_SECRET;
console.log(password);
const mysql =require('mysql');

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else{
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: password,
        database: "test_db"
    });
};

connection.connect(err => {
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
   };
    console.log("Connected as id " + connection.threadId);

    
    //  connection.end( err => {

    //     if(err) {
    //     console.log("error disconnecting: " + err.stack);
    //     return;
    //     };
    // });
    // console.log("connection terminated successfully");
});
module.exports = connection;