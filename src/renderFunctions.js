const toggleObject = (objectId, keepOnTheScreen) => {
    var object = document.getElementById(objectId);

    if (keepOnTheScreen && object.getAttribute('class').toString().indexOf('hide') < 0) {
        return;
    }

    object.classList.toggle('hide');
}

const sidebarMode = (show, hide) => {
    show.map((item) => {
        let element = document.getElementById(item);
        element.classList.remove('hide');
    });

    hide.map((item) => {
        let element = document.getElementById(item);
        element.classList.add('hide');
    });
}

const resetSidebar = () => {
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('address').value = '';

    var email = document.getElementById('email');
    email.value = '';
    email.disabled = false;
    email.classList.remove('disabled');
}

const getRegisterFormData = () => {
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var address = document.getElementById('address').value;

    return { name, phoneNumber, email, birthDate, address };
}

module.exports = { toggleObject, sidebarMode, resetSidebar, getRegisterFormData };