$(function() {

    var timer = setInterval(function (){
        if ($("#carImg").css("left") == "1400px")
            stopTimer();

        $("#carImg").css({
          "left": "+=1px"
        });
        var leftVal = $("#carImg").css("left");
        $("#text").text("< img id='carImg' src='12.gif' style='left: " + leftVal + " />");
    }, 1)

  });


  var stopTimer = function(){
    setTimeout(timer);
  }