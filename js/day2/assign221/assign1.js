 function arro()
 { 
    var arr = new Array();

    arr[0] = prompt("First Number: ");
    arr[1] = prompt("Second Number: ");
    arr[2] = prompt("Third Number: ");

    sum = 0;

    sum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]);
    multi = parseInt(arr[0]) * parseInt(arr[1]) * parseInt(arr[2]);
    div = parseInt(arr[0]) / parseInt(arr[1]) / parseInt(arr[2]);

    add = "Sum of the 3 values is ".fontcolor("red");
    time = "Multipication of the 3 values is ".fontcolor("red");;
    division = "Division of the 3 values is ".fontcolor("red");;

    title = "Adding -- Multiplying -- and dividng 3 values";
    document.write(title.bold() + "<br>"
    + "<hr>" + "<br>" + add + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum +
    "<br>" + time + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + multi
    + "<br>" + division + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + div);
 }

 arro();