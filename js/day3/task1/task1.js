var win = open("childWin.html","","width=150,height=150");
        
var currentHeight = 0;
win.focus();
height = win.screen.height;
var x = 0, y = 0;

var timerID = setInterval(function ()
{
    if (currentHeight <= 200)
        x = y = 150;

    else if (currentHeight >= height - 200)
        x = y = -150;

    win.moveBy(x,y);
    currentHeight += x;
}
, 250);



function closeWin()
{
    clearInterval(timerID);
    setTimeout(function()
    {
        win.close();
    },500);
}