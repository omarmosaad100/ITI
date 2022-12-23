document.getElementById('input').addEventListener("keydown", showAlert);

function showAlert(e) 
{
    if (e.ctrlKey) 
    {
        alert("Ctrl Key");
    } 
    else if (e.altKey) 
    {
        alert("Alt Key");
    } 
    else if (e.shiftKey) 
    {
        alert("Shift Key");
    } 
    else
        alert("ASCII Code is : " + e.keyCode);
}