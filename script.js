	function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);
function normalizeInput(input) {
    // Zet alles om naar lowercase en verwijder ! ? .
    return input
        .toLowerCase()
        .replace(/[!?.]/g, "");
}
