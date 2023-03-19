const k = document.getElementById("id");
const j = document.getElementById("id1");
document.addEventListener("keydown", function (e) {
    j.innerText = e.key+"hi their";
});
document.addEventListener("keyup", function (e) {
    j.innerText = e.key+"hi bro";
});
