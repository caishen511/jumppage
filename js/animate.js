// JavaScript Document
function animate(obj, target, callback) {
    //调用时callback()
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 缓动动画公式:(目标值-现在的位置) / 10
        //  把步长值改为整数,避免出现没有到达target,需要往上取整
        var step=(target-obj.offsetLeft)/10;
        step = step>=0?Math.ceil(step):Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止
            clearInterval(obj.timer);
            //回调函数写到定时器结束
            if (callback){
                callback();
            }
        }
        //把每次加一这个步长值改为一个慢慢变小的值
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}