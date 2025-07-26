// JavaScript Document
window.addEventListener('load', function () {
	//获取左右按钮元素
	'use strict';
	var arrow_l = document.querySelector('.arrow-l');
	var arrow_r = document.querySelector('.arrow-r');
	var banner_box = document.querySelector('.banner_box');
	var bannerWidth = banner_box.offsetWidth;
	//鼠标经过banner_box显示左右按钮,鼠标离开隐藏左右按钮
	banner_box.addEventListener('mouseenter', function () {
		arrow_l.style.display = 'block';
		arrow_r.style.display = 'block';
		clearInterval (timer);
		timer = null;//清除定时器变量
	});
	banner_box.addEventListener('mouseleave', function () {
		arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		timer = setInterval(function () {
		    //手动调用点击事件
		    arrow_r.click ();
		},10000);
	});
	//动态生成小圆圈
	var ul = banner_box.querySelector('ul');
	var ol = banner_box.querySelector('.yuan_box');
	for (var i = 0; i < ul.children.length; i++) {
		//创建li
		var li = document.createElement('li');
		//记录小圆圈的索引号
		li.setAttribute('suoyin', i);
		//把li插入到ol里面
		ol.appendChild(li);
		//圆圈排他，并绑定点击事件
		li.addEventListener('click', function () {
			//清除yuan_xs类名
			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = '';
			}
			//留下自己的类名
			this.className = 'yuan_xs';
			//轮播移动
			var suoyin = this.getAttribute('suoyin');
			//bug修复
			num = suoyin;
			yuan = suoyin;
			animate(ul, -suoyin * bannerWidth);
		});
	}
	//将ol里面的第一个li设置类名为 yuan_xs
	ol.children[0].className = 'yuan_xs';
	//克隆第一张放在UL最后面
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	//点击左右按钮图片滚动
	var num = 0;
	//控制小圆圈的播放
	var yuan = 0;
	arrow_r.addEventListener('click', function () {
		//点击到末尾循环滚动
		if (num === ul.children.length - 1) {
			ul.style.left = 0;
			num = 0;
		}
		num++;
		animate(ul, -num * bannerWidth);
		yuan++;
		if (yuan === ol.children.length) {
			yuan = 0;
		}
		//调用清除圆圈函数
		qingchuyuan();
	});
	arrow_l.addEventListener('click', function () {
		//点击到末尾循环滚动
		if (num === 0) {
			num = ul.children.length - 1;
			ul.style.left = -num * bannerWidth + 'px';
		}
		num--;
		animate(ul, -num * bannerWidth);
		yuan--;
		if (yuan < 0) {
			yuan = ol.children.length - 1;
		}
		//调用清除圆圈函数
		qingchuyuan();
	});
	//返回顶部
	var go_top = document.querySelector('.go_top');
	var nav = document.querySelector('.nav');
	window.addEventListener('scroll', function () {
		if (window.pageYOffset >= nav.offsetTop) {
			go_top.style.display = 'block';
		} else {
			go_top.style.display = 'none';
		}
	});
	var timer = null;
	go_top.onclick = function () {
		cancelAnimationFrame(timer);
		timer = requestAnimationFrame(function fn() {
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (oTop > 0) {
				document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
				timer = requestAnimationFrame(fn);
			} else {
				cancelAnimationFrame(timer);
			}
		});
	}
	//封装清除圆圈函数
	function qingchuyuan() {
		for (var i = 0; i < ol.children.length; i++) {
			//清除其余小圆圈
			ol.children[i].className = '';
		}
		//留下当前小圆圈A
		ol.children[yuan].className = 'yuan_xs';
	}
	//定时器，自动轮播
	var timer = setInterval(function () {
	    //手动调用点击事件
	    arrow_r.click();
	}, 10000);/*自动轮播延迟(毫秒)*/    
});