var moment = require('moment');

var db = require('./database');
var render = require('./renderFunctions');

//get all user's data
const getData = () => {
    var connection;
    
    try {
        connection = db.openConnection();
        $query = 'SELECT `name`,`phoneNumber`,`email`,`birthDate` FROM users';

        connection.query($query, (error, rows, fields) => {
            if (error) {
                console.log(error);
                return;
            }

            if (rows) {
                let code = '';
                rows.map((item, i) => {
                    // console.log('in map', item);
                    code += '<tr class="tableItem" data=' + item.email + '>';
                    code += '<td>' + item.name + '</td>';
                    code += '<td>' + item.phoneNumber + '</td>';
                    code += '<td>' + item.email + '</td>';
                    code += '<td>' + moment.utc(item.birthDate).format('DD/MM/YYYY') + '</td>';
                    code += '<tr>';
                });
                document.querySelector('#table > tbody').innerHTML = code;

                //add edit user listener
                var tableItems = document.getElementsByClassName('tableItem');

                for (let index = 0; index < tableItems.length; index++) {
                    const element = tableItems[index];

                    element.addEventListener('click', () => {
                        let email = element.attributes.getNamedItem('data').nodeValue;
                        getUserData(email);
                    });

                }
            }
        });
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!\r\nusers.getData()');
    } finally {
        db.closeConnection(connection);
    }
};

//get user data
const getUserData = (email) => {
    // alert(email);
    var connection;

    try {
        connection = db.openConnection();
        $query = 'SELECT `name`,`phoneNumber`,`email`,`birthDate`, `address` FROM users WHERE `email` like ? LIMIT 1';

        connection.query($query, [email], (error, row) => {
            if (error) {
                console.log(error);
                return;
            }
            // console.log('row', row);
            editUser(row);
        });
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!\r\nusers.getUserData()');
    } finally {
        db.closeConnection(connection);
    }
}

//render user data on screen
const editUser = (data) => {
    var name = document.getElementById('name');
    var phoneNumber = document.getElementById('phoneNumber');
    var email = document.getElementById('email');
    var birthDate = document.getElementById('birthDate');
    var address = document.getElementById('address');

    name.value = data[0].name;
    phoneNumber.value = data[0].phoneNumber;
    email.value = data[0].email;
    email.disabled = 'disabled';
    email.classList.add('disabled');
    birthDate.value = moment.utc(data[0].birthDate).format('YYYY-MM-DD');
    address.value = data[0].address;


    //show sidebar
    //show update button
    //hide register button
    render.sidebarMode(['sidebar', 'btnUpdate'], ['btnAddUser']);
}

//add new user
const addUser = (name, phoneNumber, email, birthDate, address) => {
    var connection;

    if (!name || !phoneNumber || !email || !birthDate || !address) {
        alert('Por favor, verifique se os dados foram preenchidos corretamente.');
        return;
    }

    try {
        connection = db.openConnection();
        $query = 'INSERT INTO users (name, phoneNumber, email, birthDate, address) VALUES (?, ?, ?, ?, ?)';

        connection.query($query, [name, phoneNumber, email, birthDate, address], (error, result) => {
            if (error) {
                console.log(error);
                return;
            }

            getData();
            
            render.resetSidebar();
            render.sidebarMode(['btnAddUser'], ['btnUpdate']);
        });
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!\r\nusers.addUser()');
    } finally {
        db.closeConnection(connection);
    }
}

//update user
const updateUser = (name, phoneNumber, email, birthDate, address) => {
    var connection;

    if (!name || !phoneNumber || !email || !birthDate || !address) {
        alert('Por favor, verifique se os dados foram preenchidos corretamente.');
        return;
    }
    
    try {
        connection = db.openConnection();
        $query = 'UPDATE `users` SET `name`=?,`phoneNumber`=?,`birthDate`=?,`address`=? WHERE `email`= ?';

        connection.query($query, [name, phoneNumber, birthDate, address, email], (error, result) => {
            if (error) {
                console.log(error);
                return;
            }

            getData();
            //update content
        });
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!\r\nusers.updateUser()');
    } finally {
        db.closeConnection(connection);
    }
}

const deleteUser = (email) => {
    var connection;

    if (!email) {
        return;
    }

    try {
        connection = db.openConnection();
        $query = 'DELETE FROM `users` WHERE `email`= ?';

        connection.query($query, [email], (error, result) => {
            if (error) {
                console.log(error);
                return;
            }

            getData();
            //update content
        });
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro!\r\nusers.deleteUser()');
    } finally {
        db.closeConnection(connection);
    }
}

module.exports = { getData, addUser, updateUser, deleteUser }