function tyu() {
    var zzaai = document.getElementsByClassName('aati');
    // 点击跳转
    var dpp = document.getElementsByClassName('dit')[0];
    var d_1 = dpp.children;
    var dni = document.getElementsByClassName('nvi');
    dni[0].style.display = 'block';
    console.log(d_1);
    for (let ddi in d_1) {
        d_1[ddi].onclick = function () {
            for (let ddui_ of d_1) {
                ddui_.setAttribute('class', '');
            }
            this.setAttribute('class', 'a');
            for (let dni_ of dni) {
                dni_.style.display = 'none';
            }
            dni[ddi].style.display = 'block';
        }
    }
    // 验证登陆格式
    for (let zzi in zzaai) {
        zzaai[zzi].onclick = function () {
            var sj = document.getElementsByClassName('sjyy')[zzi];
            var mi_ = document.getElementById('mi');
            var yzo = document.getElementById('yzzo');
            if (sj.value == getCookie('name') && mi_.value == getCookie('pas')) {
                alert('登陆成功');
                setCookie('dlyc', true);
                window.location.href = '../11/8.html';
            } else if (sj.value == getCookie('name') && yzo.value == getCookie('yz')) {
                alert('登陆成功');
                setCookie('dlyc', true);
                window.location.href = '../11/8.html';
            }
            else {
                alert('输入错误');
            }
        }
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
tyu();