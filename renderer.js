// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var db = require('./src/database');
var users = require('./src/users');
var render = require('./src/renderFunctions');

//check db connection
document.getElementById('btn').addEventListener('click', () => {
    var connection = db.openConnection();
    db.getAll(connection);
    db.closeConnection(connection);
}, false);

//add new user listener
document.getElementById('btnPlus').addEventListener('click', () => {
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('address').value = '';

    render.sidebarMode(['sidebar', 'btnAddUser'], ['btnUpdate']);
    
}, false);


//add new user listener
document.getElementById('btnAddUser').addEventListener('click', () => {
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var address = document.getElementById('address').value;

    users.addUser(name, phoneNumber, email, birthDate, address);
}, false);

//add update user listener
document.getElementById('btnUpdate').addEventListener('click', () => {
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var address = document.getElementById('address').value;

    users.updateUser(name, phoneNumber, email, birthDate, address);
}, false);


// module.exports = {name, phoneNumber, email, birthDate, address};
