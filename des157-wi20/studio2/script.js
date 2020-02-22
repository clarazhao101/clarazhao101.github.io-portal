var pop = document.getElementById('laptopidea');
var btn = document.getElementById('laptop');

var pop2 = document.getElementById('phoneidea');
var btn2 = document.getElementById('phone');

var pop3 = document.getElementById('keysidea');
var btn3 = document.getElementById('keys');




var innerbtn = document.getElementById('firstinner');
var innerbtn2 = document.getElementById('secondinner');
var innerbtn3 = document.getElementById('thirdinner');


btn.onclick = function(){
    pop.setAttribute("class", "visible");
}



innerbtn.onclick = function(){
    pop.setAttribute("class", "invisible");

}



btn2.onclick = function(){
    pop2.setAttribute("class", "visible");
}

innerbtn2.onclick = function(){
    pop2.setAttribute("class", "invisible");

}


btn3.onclick = function(){
    pop3.setAttribute("class", "visible");
}

innerbtn3.onclick = function(){
    pop3.setAttribute("class", "invisible");

}
