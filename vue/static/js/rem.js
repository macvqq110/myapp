function rem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/10.8+"px";
}
rem();
window.onresize = rem;
//480/4.8=100px  1rem = 100px