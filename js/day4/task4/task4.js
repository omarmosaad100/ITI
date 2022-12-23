let answer = document.getElementById("Answer");
console.log(answer);
let result = 0;

let sresult = "";
function EnterClear()
{
    answer.value="";
}

function EnterNumber(num)
{
    sresult += num;
    answer.value = sresult;
}

function EnterOperator(op)
{
    sresult+= op;
    answer.value = sresult;
}


function EnterEqual()
{   answer.value = answer.value.replaceAll("-", "+-");
    answer.value = calculate(answer.value);
    console.log(result);
    answer.value = result;
    result = 0;
}


function calculate(ans)
{
    let HasNoOp = true;

    if (ans.indexOf("+") != -1)
    {
        HasNoOp = false;

        if (ans.indexOf("+") < (ans.indexOf("-")) && ans.indexOf("+") != -1)
        {
            result += parseFLoat(calculate(ans.slice(0, ans.indexOf("+")))) + parseFLoat(calculate(ans.slice(ans.indexOf("+")+1)));
        }
        else if (ans.indexOf("+") && ans.indexOf("+") != -1)
        {
            result += parseFloat(calculate(ans.slice(0, ans.indexOf("+")))) + parseFloat(calculate(ans.slice(ans.indexOf("+")+1)));
        }
        return result;
    }

    if (ans.indexOf("*") != -1 || ans.indexOf("/") != -1)
    {
        HasNoOp = false;

        if (ans.indexOf("*") > (ans.indexOf("/")) && ans.indexOf("/") != -1)
        {
            result += parseFloat(calculate(ans.slice(0, ans.indexOf("/")))) / parseFloat(calculate(ans.slice(ans.indexOf("/")+1)));
        }
        else if (ans.indexOf("*") < (ans.indexOf("/")) && ans.indexOf("*") != -1)
        {
            result += parseFloat(calculate(ans.slice(0, ans.indexOf("*")))) * parseFloat(calculate(ans.slice(ans.indexOf("*")+1)));
        }
        else if (ans.indexOf("*") && ans.indexOf("*") != -1)
        {
            result += parseFloat(calculate(ans.slice(0, ans.indexOf("*")))) * parseFloat(calculate(ans.slice(ans.indexOf("*")+1)));
        }
        else if (ans.indexOf("/") && ans.indexOf("/") != -1)
        {
            result += parseFloat(calculate(ans.slice(0, ans.indexOf("/")))) / parseFloat(calculate(ans.slice(ans.indexOf("/")+1)));

        }
        return result;
    }

    if (HasNoOp)
    {
        console.log(result);
        return ans;
    }
}