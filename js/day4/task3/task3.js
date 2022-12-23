const images = document.getElementsByTagName("img");
let currentMarble = 0;
let marbleMotion;

function stopInterval() 
{
    clearInterval(marbleMotion);
}

function marbleAnimation() 
{
    marbleMotion = setInterval(function () 
    {
        if (currentMarble < 5 - 1) 
        {
            images[currentMarble].src = "Images/marble1.jpg";
            currentMarble++;
            images[currentMarble].src = "Images/marble3.jpg";
        } 
        else 
        {
            images[currentMarble].src = "Images/marble1.jpg";
            currentMarble = 0;
            images[currentMarble].src = "Images/marble3.jpg";
        }
    }, 250);
}



marbleAnimation();