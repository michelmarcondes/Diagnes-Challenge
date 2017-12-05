const getConnection = () => {
    var mysql = require('mysql');

    return mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'wpdev',
        password: 'wpdev',
        database: 'diagnes_challenge'
    });
};

const openConnection = () => {
    var connection = getConnection();

    connection.connect((error) => {
        if (error) {
            return console.log(error.stack);
        }

        console.log('Connection established');
    });

    return connection;
};

const closeConnection = (connection) => {
    connection.end(() => {
        console.log('DB connection closed');
    });
};

module.exports = {openConnection, closeConnection};
