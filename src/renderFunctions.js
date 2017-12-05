// //show/hide sidebar
// const toggleSideBar = (keepOpened) => {
//     var sidebar = document.getElementById('sidebar');

//     if (keepOpened && sidebar.getAttribute('class').toString().indexOf('hide') < 0) {
//         return;
//     }

//     sidebar.classList.toggle('hide');
// }

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

module.exports = { toggleObject, sidebarMode };