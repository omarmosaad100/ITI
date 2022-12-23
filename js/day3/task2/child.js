var string = "This is a message where characters are displayed character by character. Now it will be terminated!";
i=0;

timerID = setInterval(function ()
{
    document.write(string[i++]);
    if (i == string.length)
    {
        clearInterval(timerID);
        setTimeout(function()
        {
            close();
        }, 2000);
    }
}

,50);