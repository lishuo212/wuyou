function oiu() {
    var hh_ = document.getElementsByTagName('h3')[0];
    console.log(hh_);
    var dll = getCookie('dlyc');
    var nnm = getCookie('name');
    if (dll) {
        hh_.style.border = '0';
        hh_.innerHTML = '欢迎回来' + nnm;
    }
    function setCookie(key, val, time) {

        var date = new Date();
        date.setDate(date.getDate() + 1);
        document.cookie = key + '=' + val + ';expires=' + date;
    }

    // 取值
    function getCookie(key) {
        var arr = document.cookie.split('; ');
        for (var item of arr) {
            var nnt = item.split('=');
            if (nnt[0] == key) {
                return nnt[1];
            }
        }
    }

    function removeCookie(key) {
        this.srtCookie(key, '', -1);
    }

    // 清空cookie
    function clearCookie() {
        var arry = document.cookie.split('; ');
        for (var item of arry) {
            var ssi = item.split('=');
            this.setCookie(ssi[0], '', -1);
        }
    }
}
oiu();