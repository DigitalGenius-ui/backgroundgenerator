//Selector
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("change");

//function

function gradientGenerator(){
    body.style.background = "linear-gradient(to right, " +
    color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

//add eventlistener

color1.addEventListener("input", gradientGenerator);
color2.addEventListener("input", gradientGenerator);