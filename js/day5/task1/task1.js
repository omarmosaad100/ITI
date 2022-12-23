document.getElementById("btn").onclick = setter;
let nameVal = "", ageVal = "", genderVal = "", colorVal = "";

nameVal = document.getElementById("name").value;
ageVal = document.getElementById("age").value;
genderVal = document.getElementsByName("gender").value;
colorVal = document.getElementById("color").value;

function setter()
{
    setCookie("name", nameVal);
    setCookie("age", ageVal);
    setCookie("gender", genderVal);
    setCookie("color", colorVal, "9/10/2023");
    setCookie("visits", 0);
    location.href = "welcome.html";

}