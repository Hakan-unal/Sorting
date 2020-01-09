let input, array, display, send, sort, list, quickSort;

input = document.querySelector("#input");
array = document.querySelector("#array");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");
list = [];


quickSort = (arr) => {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let pivot, bigger, lower;
    pivot = arr[0];
    bigger = [];
    lower = [];
    for (let i = 1; i < len; i++) {
        if (arr[i] > pivot) {
            bigger.push(arr[i]);
        }
        else {
            lower.push(arr[i]);
        }
    }
    let sorted;
    sorted = quickSort(lower);
    sorted.push(pivot);
    sorted = sorted.concat(quickSort(bigger));
    return sorted;
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
    sum = quickSort(list);
    display.value = sum.join(",");
});