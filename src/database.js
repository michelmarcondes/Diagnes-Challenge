const host = 'localhost';
const port = 8889;
const user = 'wpdev';
const password = 'wpdev';
const database = 'diagnes_challenge';

const getConnection = () => {
    var mysql = require('mysql');

    return mysql.createConnection({
        host, port, user, password, database
    });
};

const openConnection = () => {
    var connection = getConnection();

    connection.connect((error) => {
        if (error) {
            alert('Ocorreu um erro!\r\ndatabase.openConnection()');
            return console.log(error.stack);
        }

        // console.log('Connection established');
    });

    return connection;
};

const closeConnection = (connection) => {
    connection.end(() => {
        // console.log('DB connection closed');
    });
};

module.exports = {openConnection, closeConnection};
