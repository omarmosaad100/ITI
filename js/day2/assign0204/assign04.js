function reger()
{
    var usName = prompt("What is your name? ");
    var phone = prompt("What is your phone number? ");
    var mobile = prompt("What is your mobile number? ");
    var email = prompt("What is your email address? ");
    var color = prompt("What is your favorite color? ");

    usNamereg = /^[a-zA-Z]*$/;
    phonereg = /^[0-9]{8}$/;
    mobilereg = /^(01)(0|1|2|5)[0-9]{8}$/;
    emailreg =  /(.+)@(.+){2,}\.(.+){2,}/;

    if(usNamereg.test(usName) && phonereg.test(phone) && mobilereg.test(mobile) && emailreg.test(email))
        document.write(("Welcome dear " + usName 
        + "<br>"+ "Your phone number is " + phone
        + "<br>"+ "Your mobile number is " + mobile
        + "<br>"+ "Your Email Adress is " + email).fontcolor(color));
}
    reger();