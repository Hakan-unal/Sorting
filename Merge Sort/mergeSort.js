let input, array, display, send, sort, list, mergeSort;

input = document.querySelector("#input");
array = document.querySelector("#array");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");
list = [];


mergeSort = (arr) => {

}


send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    list.push(val);
    array.value = list.join(",");
    input.value = "";
});

sort.addEventListener("click", () => {
    let sum;
    sum = mergeSort(list);
    display.value = sum.join(",");
});