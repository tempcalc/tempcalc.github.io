document.getElementById("submitButton").onclick = function(){

let temp=document.getElementById("tempvalue").value;

if(document.getElementById("cButton").checked){
    temp = Number(temp);
    temp = Math.round(toCelsius(temp));
    document.getElementById("p1").innerHTML = "The Temperature is " + temp + " °C";
}
else if(document.getElementById("fButton").checked){
    temp = Number(temp);
    temp = Math.round(toFahrenheit(temp));
    document.getElementById("p1").innerHTML = "The Temperature is " + temp + " °F";
}
else{
    document.getElementById("p1").innerHTML = "Please enter an valid unit Eg: Celsius or Fahrenheit";
}
function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}
}
