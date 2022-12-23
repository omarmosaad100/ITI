let win;

function createImage(){
    textVal = document.getElementsByTagName("textarea")[0].value;
    win = open("childWin.html","","width=500,height=500");
    setTimeout(function() {
        win.document.getElementById("p1").innerHTML = textVal;
        selectorArr = document.getElementsByName("selector");
        for (i = 0; i < selectorArr.length; i++)
        {
            if (selectorArr[i].checked)
                win.document.getElementsByTagName("img")[0].src = selectorArr[i].value;
        }
        win.document.getElementById("closer").addEventListener("click", function() {
            win.close();
        })
    }, 2000)
}

