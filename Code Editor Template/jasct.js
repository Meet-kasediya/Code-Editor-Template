

	function update(){
var x = document.getElementById("editor").innerHTML; 
document.getElementById("hist").innerHTML = x;
 
 
if (x=="") {
} else if (x==" ") {
  document.getElementById("processor").innerHTML="UPDATING..";

} else {
  document.getElementById("processor").innerHTML=" Typin...";
  document.getElementById('ab').style.transform = 'rotate(40deg)';
}
}


  function reset(){
var code = document.getElementById("editor");
var msg = document.getElementById("processor");
code.innerHTML = " ";
msg.innerHTML = "Code Deleted.";
var a = document.getElementById("msg1");
a.className = "show";
setTimeout(function(){ a.className = a.className.replace("show", ""); }, 6000);
  }



