function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;    
}
showTime();
setInterval(showTime, 1000);

