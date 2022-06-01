
window.addEventListener("load",function(){
    // 1.手机号正则表达式部分
    var tel = document.querySelectorAll("input")[0];
    var telval = /^1[789456]\d{9}$/;
    var yanzhengma_ =this.document.getElementsByClassName("yanzhengma")[0];
    var pad_ = this.document.getElementById("pad");
    var pad2_ = this.document.getElementById("pad2");
    var lop_ = this.document.getElementById("lop");
    tel.onmouseout = function(){
        if(oo_.test(tel.value)){
            telval.className = "green";
           
        }else{
            tel.className = 'red';
        }
    }
    //2.验证码部分
    yanzhengma_.onclick = function () {
        if (telval.test(tel.value)) {
            alert("1234");
        } else {
            alert("请输入正确的手机号");
        }
    }
    lop_.onclick = function () {
        if (telval.test(tel.value) && pad_.value == pad2_.value) {
            alert("找回密码完成");
            setCookie('tel', oo.value, 10);
            setCookie('pad_', pad_.value, 20);
            window.location.href = 'dly.html';
        } else {
            alert("格式不正确，请从新输入")
        }
    }
    
})



//添加Cookie--setCookie
//键ket 值val 时间time
function setCookie(key, val, time){
    //获取时间
    var date = new Date();
    //获取时间为天
    date.setDate(date.getDate()+time);
    //添加Cookie方法 键 = 值 expires = 时间
    document.cookie =`${key}=${val};expires=${date}`;

}
//获取Cookie--getCookie
function getCookie(key) {
    //分割 ;
    var arr = document.cookie.split("; ")
    //遍历
    for (var item of arr){
        var arrarr = item.split("=");
        //第0项为传入的值的话返回第1项
        if(arrarr[0]==key){
            return arrarr[1];
        }
    }
}
//删除Cookie--removeCookie\
function removeCookie(key) {
    this.setCookie(key,'',-1);
}
//清空cookie--clearCookie
function clearCookie() {
    var arr = document.cookie.split("; ")
    console.log(arr)
    for (var item of arr){
        var arrarr = item.split("=");
        this.removeCookie(arrarr[0],'',-1)
    }
}