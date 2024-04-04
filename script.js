let dollar = document.getElementById("dollar");
let euro = document.getElementById("euro");

dollar.onkeyup =function(){

    euro.value = dollar.value*0.2
}.
euro.onkeyup =function(){

    dollar.value = euro.value*1.09;
}