var d1=document.getElementsByClassName('d1')[0];
var d2=document.getElementsByClassName('d2')[0];
var p4=document.getElementsByClassName('p4')[0];
d1.onclick=function(){
	d2.removeAttribute('id','biankuang');
	d1.setAttribute('id','biankuang');
	p4.innerHTML='"150ml"';
}
d2.onclick=function(){
	d1.removeAttribute('id','biankuang');
	d2.setAttribute('id','biankuang');
	p4.innerHTML='"200ml"';

}
var d3=document.getElementsByClassName('d3')[0];
var d4=document.getElementsByClassName('d4')[0];
var d5=document.getElementsByClassName('d5')[0];
d3.onclick=function(){
	var m = parseInt(d4.innerHTML);
	if(m>1){
		m--;
		d4.innerHTML=m;
	}else{
		d3.style.cursor='not-allowed';
	}
}
d5.onclick=function(){
	d3.style.cursor='pointer';
	var n = parseInt(d4.innerHTML);
	n++;
	d4.innerHTML=n;
}
// 弹出蒙版
function showAlert(){
	document.getElementById('bg').style.display='block';
	document.getElementById('mask').style.display='block';

}
function back(){
	document.getElementById('bg').style.display='none';
	document.getElementById('mask').style.display='none';
}
//放大镜
var picture = document.getElementById('picture');
var ll = document.getElementsByClassName('ll')[0];
var z1  = document.getElementsByClassName('z1')[0];
var img1=document.getElementsByClassName('img1')[0];
var imgx = document.getElementById('imgx');
var slider = document.getElementById('slider');
var big=document.getElementById('big');
var imgy = document.getElementById('imgy');
var sa=document.getElementById('sa');
var sb=document.getElementById('sb');
console.log(sa);
z1.children[0].onclick=function(){
	z1.children[0].setAttribute('id','picture');
	z1.children[1].removeAttribute('id','picture');
	imgx.src='img/pp0.jpeg';
	imgy.src='img/pp0.jpeg';
}
z1.children[1].onclick=function(){
	z1.children[1].setAttribute('id','picture');
	z1.children[0].removeAttribute('id','picture');
	imgx.src='img/pp1.jpeg';
	imgy.src='img/pp1.jpeg';
}
function change(){
	if(z1.children[1].id=='picture'){
		z1.children[0].setAttribute('id','picture');
		z1.children[1].removeAttribute('id','picture');
		imgx.src='img/pp0.jpeg';
		imgy.src='img/pp0.jpeg';
	}else{
		z1.children[1].setAttribute('id','picture');
		z1.children[0].removeAttribute('id','picture');
		imgx.src='img/pp1.jpeg';
		imgy.src='img/pp1.jpeg';
	}
}
sa.onclick=function(){
	change();
}
sb.onclick=function(){
	change();
}
imgx.onmouseover=function(){
	slider.style.display='block';
	big.style.display='block';
}
imgx.onmouseout=function(){
	slider.style.display='none';
	big.style.display='none';
}
imgx.onmousemove=function(ev){
	var l= ev.clientX-(ll.offsetLeft-document.documentElement.scrollLeft)-slider.offsetWidth/2;
	var t=ev.clientY-(ll.offsetTop-document.documentElement.scrollTop)-slider.offsetHeight/2;
	var maxl = img1.offsetWidth-slider.offsetWidth;
	var maxt = img1.offsetHeight-slider.offsetHeight;
	l = l>maxl?maxl:(l<0?0:l);
 	t = t>maxt?maxt:(t<0?0:t);
	slider.style.left=l+'px';
	slider.style.top=t+'px';
	var scale = -imgy.offsetHeight/imgx.offsetHeight;
	var bl=l*scale+100;
	var bt=t*scale+100;
	imgy.style.left=bl+'px';
	imgy.style.top=bt+'px';
}
