

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
    // Get the snackbar DIV
  var a = document.getElementById("msg1");

  // Add the "show" class to DIV
  a.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ a.className = a.className.replace("show", ""); }, 6000);
  }























function register1() {






}
