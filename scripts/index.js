var pageContent = document.getElementById("sidebar").innerHTML; 
sessionStorage.setItem("sidebar", pageContent);

window.onload = function(){
	var refButton = document.getElementById("btnButton");

	refButton.onclick = function() {
		alert('I am clicked!');
	}
};
