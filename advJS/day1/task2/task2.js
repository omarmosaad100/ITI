function reverseFromArr(a, b){
    return Array.from(arguments).reverse();
}

function reverseSpread(...args){
    return args.reverse();
}

function reverseCall(){
    return [].reverse.call(arguments);
}

function reverseApply(){
    return [].reverse.apply(arguments);
}


function onlyTwo (a, b)
{
    if (arguments.length != 2)
        throw RangeError("number of Arguments should be exactly two");
    
    return console.log("Thank you!");
}

function adding (a, b)
{
    let sum = 0;
    for (num of arguments)
        if (typeof(num) != "number")
            throw TypeError("All arguments should be numeric");
        else
            sum += num;
    return sum;
}