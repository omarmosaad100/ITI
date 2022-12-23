currentImg = 1;
ImgObj;
slideInterval;

function Next()
{
    ImgObj = document.getElementById("myImage");
    if (currentImg < 4)
    {
        currentImg++;
        ImgObj.src = currentImg + ".png";
    }
}

function Previous()
{
    ImgObj = document.getElementById("myImage");
    if (currentImg > 1)
    {
        currentImg--;
        ImgObj.src = currentImg + ".png";
    }
}

function Slide()
{
    slideInterval = setInterval(function(){
        if (currentImg < 4)
        {
            currentImg++;
            ImgObj.src = currentImg + ".png";
        }
        else
        {
            currentImg = 1;
            ImgObj.src = currentImg + ".png";
        }
    }, 2000)
}

function StopSlide()
{
    clearInterval(slideInterval);
}