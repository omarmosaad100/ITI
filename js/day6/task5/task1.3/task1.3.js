document.getElementById("submit").addEventListener("submit", submission);
let name = document.getElementById("userName");
const timeoutEvent = new Event("timeout");

name.addEventListener("timeout", function () {
    if (name.value === "")
        alert("You Haven't Entered Any Data!");
})

function submission(e) {
    let confirmation = confirm("Do you want to submit?")
    if (!confirmation) {
        e.preventDefault()
    }
}

setTimeout(function () {
    document.getElementById("userName").dispatchEvent(timeoutEvent)
}, 10000);