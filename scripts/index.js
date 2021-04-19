var pageContent = document.getElementById("sidebar").innerHTML; 
sessionStorage.setItem("sidebar", pageContent);
if (window.console) console = { 
    log: function(){
        var output='',
            console=document.getElementById('log');
        for (var i=0;i<arguments.length;i++) {
            output+=arguments[i]+' ';
        }
        console.innerText+=output+"\n";
    }
};
window.onload = function(){
    var refButton = document.getElementById("btnButton");

    refButton.onclick = function() {
    alert('I am clicked!');
    }
};
