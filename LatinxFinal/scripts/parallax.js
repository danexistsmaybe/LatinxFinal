var layer = document.getElementById("bg");

var y = 0;

var h = window.innerHeight;
function animate(event) {
	if (event.type=="wheel") var dir = event.deltaY;
	else {
		var dir = lastpos - event.touches[0].clientY;
		lastpos = event.touches[0].clientY;
	}

	y -= .2*dir;
	y = Math.min(y, 0);
	y = Math.max(y, h - layer.clientHeight);
	layer.style.top = y+"px";
}
window.addEventListener('wheel', animate);