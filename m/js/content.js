// JavaScript Document
//页面加载完毕后再调用，也就是'loda'事件
window.addEventListener('load', function () {
    //获取全部按钮
    var anniu = document.querySelector('.nav').querySelectorAll('span');
    //获取全部内容
    var neirong = document.querySelector('.content_box').querySelectorAll('.nr_box');
    //获取分类内容
    var lf = document.querySelector('.box_lf');
    var yk = document.querySelector('.box_yk');
    var qt = document.querySelector('.box_qt');
    var xz = document.querySelector('.box_xz');
    //获取分类子盒子的数量
    var num1 = document.querySelector('.box_lf').querySelectorAll('.pt_box');
    var num2 = document.querySelector('.box_yk').querySelectorAll('.pt_box');
    var num3 = document.querySelector('.box_qt').querySelectorAll('.pt_box');
    var num4 = document.querySelector('.box_xz').querySelectorAll('.pt_box02');
    var num = 8;
    //判断子盒子的个数是否超出隐藏
    if (num1.length <= num) {
        lf.style.height = '100%';
    }
    if (num2.length <= num) {
        yk.style.height = '100%';
    }
    if (num3.length <= num) {
        qt.style.height = '100%';
    }
    if (num4.length <= num) {
        xz.style.height = '100%';
    }
    if (num1.length > num) {
        lf.style.height = '900px';
    }
    if (num2.length > num) {
        yk.style.height = '900px';
    }
    if (num3.length > num) {
        qt.style.height = '900px';
    }
    if (num4.length > num) {
        xz.style.height = '900px';
    }
    //分类按钮点击事件的显示与隐藏
    for (var i = 0; i < anniu.length; i++) {
        anniu[0].onclick = function () {
            for (var i = 0; i < anniu.length; i++) {
                anniu[i].classList.remove('act');
            }
            this.classList.add('act');
            for (var i = 0; i < neirong.length; i++) {
                neirong[i].style.display = 'none';
            }
            lf.style.display = ' flex';
        }
        anniu[1].onclick = function () {
            for (var i = 0; i < anniu.length; i++) {
                anniu[i].classList.remove('act');
            }
            this.classList.add('act');
            for (var i = 0; i < neirong.length; i++) {
                neirong[i].style.display = 'none';
            }
            yk.style.display = ' flex';
        }
        anniu[2].onclick = function () {
            for (var i = 0; i < anniu.length; i++) {
                anniu[i].classList.remove('act');
            }
            this.classList.add('act');
            for (var i = 0; i < neirong.length; i++) {
                neirong[i].style.display = 'none';
            }
            qt.style.display = ' flex';
        }
        anniu[3].onclick = function () {
            for (var i = 0; i < anniu.length; i++) {
                anniu[i].classList.remove('act');
            }
            this.classList.add('act');
            for (var i = 0; i < neirong.length; i++) {
                neirong[i].style.display = 'none';
            }
            xz.style.display = ' flex';
        }
    }
});