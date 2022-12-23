function sorter()
{
    arr = new Array();

    for (i = 0; i < 5; i++)
        arr[i] = prompt("Enter a number: ");


    orig = "You have entered the values of ".fontcolor("red");
    desc = "Your numbers in descending order: ".fontcolor("red");
    asc = "Your numbers in ascending order: ".fontcolor("red");


    document.write("Sorting".bold() + "<br>" + "<hr>" + orig + arr + "<br>"
    + desc + arr.sort(function(a, b){return a - b}).reverse() + "<br>"
    + asc + arr.sort(function(a, b){return a - b}));
}
sorter();