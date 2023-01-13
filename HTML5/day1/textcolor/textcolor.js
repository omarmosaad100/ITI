red = document.getElementById("red");
green = document.getElementById("green");
blue = document.getElementById("blue");

red.onchange = function() {
    document.getElementById("coloredText").style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}
green.onchange = function() {
    document.getElementById("coloredText").style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}
blue.onchange = function() {
    document.getElementById("coloredText").style.color = "rgb("+red.value+","+green.value+","+blue.value+")";
}