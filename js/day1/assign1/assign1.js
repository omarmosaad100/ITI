function header()
{
    var person = prompt("Please enter your name: ");

    for (num = 1; num <= 6; num++)
    {
        document.write("<p>" + "<h"+num+">" + person);
    }
}

header();