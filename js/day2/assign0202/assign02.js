function rev()
{
    var str = prompt("Please provide a string: ");

    if(!confirm("Do you want to consider the difference between letter cases? "))
        str = str.toLowerCase();

    var lor = str.split("");
    var ror = str.split("").reverse();

    c = 0;

    for (i = 0; i < str.length; i++)
        if (lor[i] == ror[i])
            c++;

    if (c == str.length)
        document.write("Palindrome");
    else
        document.write("Not Palindrome");
}

rev();