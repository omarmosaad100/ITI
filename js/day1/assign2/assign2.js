function sum()
{
    var sum = 0, num;

    while (sum < 100 && num != 0)
    {
        num = prompt("Enter new number: ");
        if (isNaN(num))
        {
            num = 0;
            alert("Only integers are allowed");
        }

        sum += parseInt(num);
    }

    document.write(sum);
}

sum();