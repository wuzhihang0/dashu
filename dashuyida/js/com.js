document.addEventListener('DOMContentLoaded', function() {


	// 滚轮滑动
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        // grabCursor: true	
    });
    	// 地图脚本
	
    //鼠标点击 mask 出现隐藏

    var oBtn=document.getElementById('hBtn');
   
    var oMask=document.getElementById('mask');
    var oA=oMask.getElementsByTagName('a')[2];

    let lock=false;
    oBtn.addEventListener('touchstart',function(){
    	if(lock){
    		oMask.style.display='none';
    		lock=false;
    	}else{
    		oMask.style.display='block';
    		lock=true;
    	}
    },false);
    // oA.addEventListener('touchstart',function(){
    //   if(lock){
    //     oMask.style.display='none';
    //     lock=false;
    //   }else{
    //     oMask.style.display='block';
    //     lock=true;
    //   }

    // },false);
  oA.onclick=function(){
    oMask.style.display='none';
  };

   
    //
}, false);
   
