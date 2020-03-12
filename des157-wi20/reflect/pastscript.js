var btn = document.getElementById("firstentry");
var innerbtn = document.getElementById("close");
var contents = document.getElementById('overlay');

btn.onclick = function(){
  showOverlay();
}

innerbtn.onclick = function(){
closeOverlay();
}

function showOverlay(){

  contents.style.display = "block";
}

function closeOverlay(){

  contents.style.display = "none";

}
