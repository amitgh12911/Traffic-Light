let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let greenLight = document.getElementById("green");

redLight.addEventListener("mouseover", function () {
    redLight.innerText = "stop";
});

redLight.addEventListener("mouseleave", function () {
    redLight.innerText = "";
});

yellowLight.addEventListener("mouseover", function () {
    yellowLight.innerText = "start";
});

yellowLight.addEventListener("mouseleave", function () {
    yellowLight.innerText = "";
});
greenLight.addEventListener("mouseover", function () {
    greenLight.innerText = "go";
});

greenLight.addEventListener("mouseleave", function () {
    greenLight.innerText = "";
});