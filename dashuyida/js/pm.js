document.addEventListener('DOMContentLoaded', function() {
 
	//遮罩层显示隐藏
    var oMask = document.getElementById('mask');
    let lock = false;
    var oBtn2 = document.getElementById('hBtn');
    oBtn2.addEventListener('touchstart', function() {
        if (lock) {
            oMask.style.display = 'none';
            lock = false;
        } else {
            oMask.style.display = 'block';
            lock = true;
        }
    }, false);
    //轮播图
    var oNav=document.getElementById('nav');
    var aA=oNav.getElementsByTagName('a');
    var oBox = document.getElementById('box');
    var oUl = document.querySelector('#box ul');
    var aLi = oUl.children;
    var iNow = 0;
    var x = -iNow * aLi[0].offsetWidth;
    //在这里设置一个开关,是css运动结束后解锁
    var bReady = true;
    oUl.addEventListener('touchstart', function(ev) {

        if (bReady == false) {
            return; }
        bReady = false;
        oUl.style.transition = 'none';
        var disX = ev.targetTouches[0].pageX - x;
        var downX = ev.targetTouches[0].pageX;

        function fnMove(ev) {
            x = ev.targetTouches[0].pageX - disX;
            oUl.style.transform = 'translate3d(' + x + 'px,0,0)';
        }

        function fnEnd(ev) {
            var upX = ev.changedTouches[0].pageX;
            //判断是否移动距离大于50
            if (Math.abs(upX - downX) > 50) {
                //左边移动
                if (upX - downX < 0) {
                    iNow++;
                    //
				
    				//
                    if (iNow == aLi.length) { iNow = aLi.length - 1; }
                } else {
                    //右边移动
                    iNow--;
                    if (iNow == -1) { iNow = 0; }
                }
            }
            //储存此时ul的位置
            x = -iNow * aLi[0].offsetWidth;
            oUl.style.transform = 'translate3d(' + x + 'px,0,0)';
            oUl.style.transition = '200ms all ease';

            //监听li 当移动到两端的li时  瞬间移回
            function tEnd() {
                if (iNow > 3) {
                    iNow = 3;

                  
				
                }
                if (iNow < 0) { iNow = 0; }
                oUl.style.transition = 'none'
                x = -iNow * aLi[0].offsetWidth;
                oUl.style.transform = 'translate3d(' + x + 'px,0,0)';
                bReady = true;
                    //
                  for (var i = 0; i < aA.length; i++) {
					aA[i].className='';
					}
					aA[iNow].className='active';
					//
            }
            oUl.addEventListener('transitionend', tEnd, false);
            //释放内存
            document.removeEventListener('touchend', fnEnd, false);
            document.removeEventListener('touchmove', fnMove, false);
        }

        document.addEventListener('touchmove', fnMove, false);
        document.addEventListener('touchend', fnEnd, false);
        //阻止默认事件
        ev.preventDefault();
    }, false);

    for (let i = 0; i < aA.length; i++) {
    	aA[i].index=i;
    	aA[i].addEventListener('touchstart',function(){
    		 oUl.style.transition = 'none';
    		for (var i = 0; i < aA.length; i++) {
    			aA[i].className='';
    		}
    		this.className='active';
    		iNow=this.index;
    		oUl.style.transform = 'translate3d('+(-iNow*aLi[0].offsetWidth)+'px,0,0)';
            oUl.style.transition = '200ms all ease';
    		
    	},false);
    }

}, false)
