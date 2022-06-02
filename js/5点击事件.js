function zzo() {
    var ndi = document.getElementsByClassName('nt');
    // 找到蒙版
    var zzh_ = document.getElementsByClassName('zzh')[0];
    var iiob = 0;
    // let可以阻止循环跳出，在里面设置事件也可以找到循环值
    for (let i = 0; i < ndi.length; i++) {
        ndi[i].onclick = function () {
            spp = ndi[i].lastElementChild;
            // 设置区域点击
            uuo = document.getElementsByClassName('uzi')[i];
            var ooti = document.getElementsByClassName('oui')[0];
            var qq_ddh = ooti.children;
            for (let ooi in qq_ddh) {
                qq_ddh[ooi].onclick = function () {
                    for (var zzp of qq_ddh) {
                        zzp.setAttribute('class', '');
                    }
                    this.setAttribute('class', 'iio');
                }
            }
            uuo.style.display = 'block';
            zzh_.style.display = 'block';
            // 点击其他nt时取消自己样式
            spp.style.borderBottom = '0.5rem solid rgb(251, 138, 25)';
            spp.style.borderTop = '0.5rem solid transparent';
            for (let ndi_l of ndi) {
                ndi_l.onclick = function () {
                    spp.style.borderBottom = '0.5rem solid transparent';
                    spp.style.borderTop = '0.5rem solid #999';
                    uuo.style.display = 'none';
                    zzh_.style.display = 'none';
                    zzo();
                }
            }
            // 设置地区点击1
            var tti_ = document.getElementsByClassName('tti')[0];
            // 找到区域点击1的每一项
            var tti_ll = tti_.children;
            // 遍历每一个li
            for (let nnu in tti_ll) {
                tti_ll[nnu].onclick = function () {
                    // 给区域点击三设置事件
                    var tt_0 = document.getElementsByClassName('tt_0');
                    var ddd_0i = tt_0[nnu].children;
                    for (let ddo in ddd_0i) {
                        ddd_0i[ddo].onclick = function () {
                            for (let ddo_ of ddd_0i) {
                                ddo_.setAttribute('class', '');
                            }
                            this.setAttribute('class', 'iio');
                        }
                    }
                    for (let nuum of tt_0) {
                        nuum.style.display = 'none';
                    }
                    tt_0[nnu].style.display = 'block';
                    tt_0[nnu].style.display = 'flex';
                    for (var nnu_ of tti_ll) {
                        nnu_.setAttribute('class', '');
                    }
                    this.setAttribute('class', 'iio');
                }
            }
            // 设置月租点击
            // 找到月租大的ul
            var uu_0 = document.getElementsByClassName('atu')[0];
            var uu_0ll = uu_0.children;
            for (let uio in uu_0ll) {
                uu_0ll[uio].onclick = function () {
                    for (let uuio of uu_0ll) {
                        uuio.setAttribute('class', '');
                    }
                    this.setAttribute('class', 'zztin');
                }
            }
            // 设置房型点击
            // 找到点击框
            var ooiud = document.getElementsByClassName('ouiid');
            for (let oo in ooiud) {
                ooiud[oo].onclick = function () {
                    for (oo_ of ooiud) {
                        oo_.setAttribute('id', '');
                    }
                    this.setAttribute('id', 'ddodu');
                }
            }
            // 设置更多点击样式
            var niot = document.getElementsByClassName('ntoo')[0];
            var spaon = niot.getElementsByTagName('span');
            function oyt() {
                for (let ssan in spaon) {
                    spaon[ssan].onclick = function () {
                        this.setAttribute('class', 'asn');
                        this.onclick = function () {
                            this.setAttribute('class', '');
                            oyt();
                        }
                    }
                }
            }
            oyt();
            this.onclick = function () {
                spp.style.borderBottom = '0.5rem solid transparent';
                spp.style.borderTop = '0.5rem solid #999';
                uuo.style.display = 'none';
                zzh_.style.display = 'none';
                zzo();
            }
        }
    }
}
zzo();