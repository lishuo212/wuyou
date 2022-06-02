function zzi() {
    var in_1 = document.getElementsByTagName('input')[0];
    // 找到sapn
    var ssp = document.getElementsByTagName('span')[0];
    // 找到获取验证码
    var zzio = document.getElementsByTagName('button')[0];
    var in_2 = document.getElementsByTagName('input')[1];
    var ntop = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    in_1.onfocus = function () {
        ssp.innerHTML = '请输入11位手机号';
        this.onblur = function () {
            if (!ntop.test(in_1.value)) {
                ssp.innerHTML = '请输入正确手机号';
            } else if (in_1.value.length = 0) {
                ssp.innerHTML = '手机号不能为空';
            } else {
                ssp.innerHTML = '输入正确';
            }
        }
    }
    // 验证码部分
    var zuo;
    var orr = 4444;
    zzio.onclick = function () {
        var iu = 60;
        zuo = setInterval(function () {
            iu--;
            if (iu <= 0) {
                zzio.innerHTML = '点击重新获取';
            } else if (iu == 55) {
                alert(orr);
                in_2.value = orr;
                zzio.innerHTML = '获取验证码';
            } else if (zzio.value != orr) {
                ssp.innerHTML = '请重新输入';
            } else {
                ssp.innerHTML = '输入正确';
            }
            zzio.innerHTML = '(' + iu + ')秒重发';
        }, 1000)

    }
    // 密码部分
    var in_3 = document.getElementsByTagName('input')[2];
    var ttym = /^[A-z]\d{5}$/;
    in_3.onfocus = function () {
        ssp.innerHTML = '请输入首位字母六位数密码';
        this.onblur = function () {
            if (!ttym.test(in_3.value)) {
                ssp.innerHTML = '密码格式输入有误';
            } else if (in_3.value.length = 0) {
                ssp.innerHTML = '密码不能为空';
            } else {
                ssp.innerHTML = '输入成功';
            }
        }
    }
    // 点击注册判断是否注册成功
    var aatt = document.getElementsByClassName('aati')[0];
    aatt.onclick = function () {
        if (ntop.test(in_1.value) && in_2.value == orr && ttym.test(in_3.value)) {
            alert('注册成功');
            setCookie('name', in_1.value);
            setCookie('yz', in_2.value);
            setCookie('pas', in_3.value);
            window.location.href = '../11/11.html';
        } else {
            alert('注册失败');
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
zzi();