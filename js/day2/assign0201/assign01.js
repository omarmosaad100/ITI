function findc()
{
    var str = prompt("Please provide a string: ");

    var c = prompt("Please provide a specific character: ");


    if(confirm("Do you want to consider the difference between letter cases? "))
        document.write(str.split(c).length-1);
    else
        document.write(str.toLowerCase().split(c).length-1);
}


findc();