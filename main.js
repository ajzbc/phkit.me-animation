var target = document.getElementById("target");

var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
};

function start() {
    var stat = new CountUp('target', 0, 999, 0, 3, options);
    stat.start();
    setTimeout(function () {
        target.innerHTML = "▲";
    }, 3500);
}