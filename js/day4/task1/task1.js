inputs = window.location.search.split("&");

Name = inputs[0].split("=")[1];
Email = inputs[1].split("=")[1].replace("%40", "@");
Password = inputs[2].split("=")[1];
JobTitle = inputs[3].split("=")[1];
Mobile = inputs[4].split("=")[1];
Gender = inputs[5].split("=")[1];
Address = inputs[6].split("=")[1];

document.write("Hello, " + Name + "<br> <br>");
document.write("We are glad to have one of the best " + JobTitle + "s in the world <br> <br>");

document.write("Here are your inserted credentials: <br> <br>");
document.write("Email: "  + Email + "<br> <br>");
document.write("Password: "  + Password + "<br> <br>");
document.write("Mobile: "  + Mobile + "<br> <br>");
document.write("Gender: "  + Gender + "<br> <br>");
document.write("Address: "  + Address + "<br> <br>");



//document.write(navigator.userAgent);
if (navigator.userAgent.search("Chrome") === -1)
    alert("Our website works best with Chrome");