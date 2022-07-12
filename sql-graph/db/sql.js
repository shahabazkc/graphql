import mysql from 'mysql2';

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "graphqlcrud"
});

function connect() {
    connection.connect(function (err) {
        if (err) console.log(err);
        else {
            console.log("Db Connected!");
            connection.query("CREATE DATABASE IF NOT EXISTS graphqlcrud", function (err, result) {
                if (err) console.log(err);
                console.log("Database created", result);
            });
        }
    });
}

connect();


export { connection };