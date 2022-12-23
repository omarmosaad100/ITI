function circle()
{
    radius = prompt("Radius: ");

    area = (radius*radius) * Math.PI;
    alert("Total area of the circle is " + area);

    num = prompt("Enter a value that you want to calculate its square root ");

    alert("Square root of " + num + " is " + Math.sqrt(num));
    
    cos = prompt("Enter an angle you want to calculate its cos value");

    cosed = Math.cos(cos);
    document.write("cos " + cos + " is " + cosed);

}

circle();