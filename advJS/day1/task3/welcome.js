function welcome() 
{
    let name = getCookie("name");
    let gender = getCookie("gender");
    let color = getCookie("color");
    let visits = getCookie("visits");

    setCookie("visits", parseInt(visits) + 1);

    if (gender === "male")
        document.getElementById("Img").src = "Images/1.jpg";
    else 
        document.getElementById("Img").src = "Images/2.jpg";


    let text = document.getElementByTagName("p");
    text.innerText = "Welcome " + name + ", you have visited the website " + visits + " times.";
    text.style.color = color;
}

welcome()