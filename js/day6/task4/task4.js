var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

var starter = document.getElementById("starter");
var resetBtn = document.getElementById("resetter");

starter.onclick = start;
resetBtn.onclick = reset;

let motionFlag = false;
let forward = true;
let motionInt;
function start()
{
    if (motionFlag)
    {
        clearInterval(motionInt);
        motionFlag = false;
        starter.innerText = "Start";
    }
    else
    {
        motionFlag = true;
        starter.innerText = "Stop";
        
        motionInt = setInterval(function(){

            var img1LeftVal = parseInt(getComputedStyle(img1).left);
            var img2LeftVal = parseInt(getComputedStyle(img2).left);
            var img3BottomVal = parseInt(getComputedStyle(img3).top);

            if (forward)
            {
                if (img1LeftVal >= 450)
                    forward = false;

                    img1.style.left = (img1LeftVal+10) + "px";
                    img2.style.left = (img2LeftVal-10) + "px";
                    img3.style.top = (img3BottomVal-10) + "px";
            }

            else
            {
                if (img1LeftVal <= 10)
                    forward = true;

                    img1.style.left = (img1LeftVal-10) + "px";
                    img2.style.left = (img2LeftVal+10) + "px";
                    img3.style.top = (img3BottomVal+10) + "px";
            }
        }, 30);
    }
}
    

function reset() {
    img1.style.left = 0 + "px";
    img2.style.left = 405 + "px";
    img3.style.top = 450 + "px";
}