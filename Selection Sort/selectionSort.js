let input, output, display, send, sort, array;

input = document.querySelector("#input");
output = document.querySelector("#output");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");

array = [];

send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    array.push(val);
    display.value = array.join(", ");
    input.value = "";

});









