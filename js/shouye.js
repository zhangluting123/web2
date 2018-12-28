// 轮播图
var slider = document.getElementById('slider');
var box = document.getElementById('zhongtp');
var left = document.getElementById('left0');
var right = document.getElementById('right0');
var oNavlist=document.getElementById('nav0').children;
var index = 1;

function fun(){
	box.onmouseover=function(){
		clearInterval(timer);
		animate(left,{opacity:80});
		animate(right,{opacity:80});
	}
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
}
fun();

function next(){
	index++;console.log('index='+index);
	animate(slider,{left:-800*index},function()
	{
		if(index==7){
			slider.style.left='-800px';
			index=1;
		}
	});
	navChange();
}
function prev(){
	index--;
	animate(slider,{left:-800*index},function()
	{
		if(index==0){
			slider.style.left='-4800px';
			index=6;
		}
	});
	navChange();
}
var timer = setInterval(next,3000);

right.onclick=next;
left.onclick=prev;

for(var i=0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick=function(){
		index=this.idx+1;
		animate(slider,{left:-800*index});
		navChange();
	}
}

function navChange(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className='';
	}
	if(index==7){
		oNavlist[0].className='active';
	}else if(index==0){
		oNavlist[5].className='active';
	}else{
		oNavlist[index-1].className ='active';
	}
}

function animate(obj,json,callback){		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){	
		var isStop = true;
		for (var attr in json){
			if(attr=='opacity'){
				var now = parseInt(getStyle(obj,attr)*100);
			}else{
				var now = parseInt(getStyle(obj,attr));
			}
			
			var speed = (json[attr]-now)/5;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if (attr=='opacity') {
				obj.style[attr]=(now+speed)/100;
			}else{
				obj.style[attr]=now+speed+'px';
			}
			
			var current = now+speed;
			if(json[attr]!==current){
				isStop = false;
			}
		}					
		if(isStop){
			clearInterval(obj.timer)
			callback&&callback();
		}
 	},10);
	
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}		
}

// 公告
var ul = document.getElementsByClassName('ul');
var an=document.getElementsByClassName('an02')[0];
ul[1].innerHTML="<li>[公告]帮购及VIP服务调整12</li><li>[公告]帮购及VIP服务调整13</li>"+ul[0].innerHTML;
function ulNext(){
	if(ul[1].offsetHeight-an.scrollTop<=0){
		an.scrollTop-=ul[0].offsetHeight;
	}else{
		an.scrollTop++;
	}
}
setInterval(ulNext,10);

// 充值
var select = document.getElementById('select');
var span = document.getElementsByClassName('span3')[1];
select.onchange=function(){
	span.innerHTML=this.value;
}
//右侧弹出
var tan = document.getElementsByClassName('idtan');
var erwei = document.getElementsByClassName('erwei')[0];
function over(obj,i){
	obj.onmouseover=function(){
		clearInterval(shijian);
		if(!this.contains(event.fromElement)){
			obj.style.marginLeft="50px";
			if(i==2){
				erwei.src='img/erwei.png';
				erwei.style.width='80px';
				erwei.style.height='80px';
				erwei.style.marginTop='0px';
			}
			var shijian=setInterval(function(){
				obj.style.marginLeft=parseInt(obj.style.marginLeft)-1+'px';
				if(parseInt(obj.style.marginLeft)<1){
					clearInterval(shijian);
				}
			},10);
		}
	}
	
	obj.onmouseout=function(){
		clearInterval(shijian2);
		if(!this.contains(event.toElement)){
			if(parseInt(obj.style.marginLeft)!=50){
				obj.style.marginLeft="1px";
				if(i==2){
					erwei.src='img/serwei.png';
					erwei.style.width='24px';
					erwei.style.height='24px';
					erwei.style.marginTop='40px';
				}
				var shijian2=setInterval(function(){
					obj.style.marginLeft=parseInt(obj.style.marginLeft)+1+'px';
					if(parseInt(obj.style.marginLeft)>49){
						clearInterval(shijian2);
					}
				},10);
			}else{
				obj.style.marginLeft="50px";
			}
		}
		
	}
	
}
for(var i=0;i<tan.length;i++){
	over(tan[i],i);
}


window.onload=function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position='fixed';
		}else{
			cover.style.position='static';
		}
	}
}

