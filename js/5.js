function nnt() {
    var tty = 568;
    var iio = document.documentElement.clientWidth || document.body.clientWidth;
    var zzu = document.getElementsByTagName('html')[0];
    zzu.style.fontSize = iio / tty * 10 + 'px';
}
window.onresize = nnt;