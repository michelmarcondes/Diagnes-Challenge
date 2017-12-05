var db = require('./src/database');
var users = require('./src/users');
var render = require('./src/renderFunctions');

// //check db connection
// document.getElementById('btn').addEventListener('click', () => {
//     var connection = db.openConnection();
//     db.getAll(connection);
//     db.closeConnection(connection);
// }, false);

//add new user listener
document.getElementById('btnPlus').addEventListener('click', () => {
    render.resetSidebar();
    render.sidebarMode(['sidebar', 'btnAddUser'], ['btnUpdate']);
}, false);


//add new user listener
document.getElementById('btnAddUser').addEventListener('click', () => {
    const { name, phoneNumber, email, birthDate, address } = render.getRegisterFormData();
    users.addUser(name, phoneNumber, email, birthDate, address);
}, false);

//add update user listener
document.getElementById('btnUpdate').addEventListener('click', () => {
    const { name, phoneNumber, email, birthDate, address } = render.getRegisterFormData();
    users.updateUser(name, phoneNumber, email, birthDate, address);
}, false);

//add cancel button listener
document.getElementById('btnCancel').addEventListener('click', () => {
    render.resetSidebar();
    render.sidebarMode(['btnAddUser'], ['btnUpdate', 'sidebar']);
}, false);

//add delete button listener
document.getElementById('bntDelete').addEventListener('click', () => {
    const { email } = render.getRegisterFormData();
    users.deleteUser(email);

    render.resetSidebar();
    render.sidebarMode(['btnAddUser'], ['btnUpdate']);
}, false);
