$(function () { 

    var countImg = 1;

    $("#services").click(function (){
        $("#aboutDiv").hide();
        $("#galleryDiv").hide();
        $("#complainDiv").hide();
        $("#servicesList").slideToggle(200);
        $("#leftImg").hide();
        $("#rightImg").hide();
        $("#outputDiv").hide();
    })

    $("#about").click(function (){
        $("#aboutDiv").slideToggle(200);
        $("#galleryDiv").hide();
        $("#complainDiv").hide();
        $("#servicesList").hide();
        $("#leftImg").hide();
        $("#rightImg").hide();
        $("#outputDiv").hide();
    })

    $("#gallery").click(function (){
        $("#galleryDiv").slideToggle(200);
        $("#leftImg").slideToggle(200);
        $("#rightImg").slideToggle(200);

        $("#aboutDiv").hide();
        $("#complainDiv").hide();
        $("#servicesList").hide();
        $("#outputDiv").hide();
    })

    $("#complain").click(function (){
        $("#complainDiv").slideToggle(200);

        $("#galleryDiv").hide();
        $("#aboutDiv").hide();
        $("#servicesList").hide();
        $("#leftImg").hide();
        $("#rightImg").hide();
    })

    $("#leftImg").click(function (){
        if (countImg > 1)
            countImg--;

        $("#galleryImage").attr("src", "../images/" + countImg + ".jpg");
    })

    $("#rightImg").click(function (){
         if (countImg < 8)
             countImg++;

        $("#galleryImage").attr("src", "../images/" + countImg + ".jpg");
    })


    $("#transformer").click(function (){
        $("#outputDiv").slideToggle(200);
        $("#complainDiv").slideToggle(200);

        let userComplain = $("#user-complain").val();
        let userName = $("#user-name").val();
        let userEmail = $("#user-email").val();
        let userPhone = $("#user-phone").val();
        

        $("#outputDiv").html("your complain is " 
        + userComplain + "<br> Your name is " + userName + "<br> Your email is " 
        + userEmail + "<br> Your phone is " + userPhone + "<br><br>");

        $("#outputDiv").append("<button id='editor'>Edit your complain</button>");

        $("#editor").click(function (){
            $("#outputDiv").slideToggle(200);
            $("#complainDiv").slideToggle(200);
        });
;    })



})