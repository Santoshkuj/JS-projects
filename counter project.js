const btn = document.getElementById("resetbtn");

function RandomColor () {
    let val = "0123456789ABCDEF"
    let cons = "#"
    for ( i=0; i<6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
btn.addEventListener ("click", changeColor);
function changeColor() {
    document.body.style.backgroundColor = RandomColor();
}
const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const displayvalue = document.getElementById("displayvalue");
const resetbtn = document.getElementById("resetbtn");

decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value-1; 
    }
    else {
        alert("Netative nos are not allowed")
    }
});

incrementbtn.addEventListener("click", () => {
        const value = Number(displayvalue.innerText);
        if (value >= 10) {
            alert("10+ value are not allowed")
        }
        else {
            displayvalue.innerText = value+1;
        }
    });


    resetbtn.addEventListener ("click", () => {
    displayvalue.innerText = 0;
});