
// init sidebar menu
$('.ui.sidebar').sidebar({
    context: $('.bottom.segment')
}).sidebar('attach events', '.menu .item');

// menu item onclick
function sideMenuItemOnclick(page) {
    window.electron.ipcRenderer.send(page);
}