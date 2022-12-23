function maxy()
{
    str = prompt("Please provide a sentence: ");

    arrW = str.split(" ");

    //document.write(str.split(" "));
    maxN = 0;

    for (i = 0; i < arrW.length; i++)
        if (arrW[i].length > maxN)
            maxN = arrW[i].length;

    for (i = 0; i < arrW.length; i++)
    if (arrW[i].length == maxN)
    {
        document.write(arrW[i]);
        return;
    }
}

maxy();