// SIDE NAVIGATION BAR
function openSideNav() {
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById("header").style.marginLeft = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("footer").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeSideNav() {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("header").style.marginLeft= "0";
	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("footer").style.marginLeft= "0";
	document.body.style.backgroundColor = "white";
}