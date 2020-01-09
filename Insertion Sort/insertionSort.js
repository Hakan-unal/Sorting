let input, array, display, send, sort, list, insertionSort;

input = document.querySelector("#input");
array = document.querySelector("#array");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");
list = [];


insertionSort = (arr) => {
    let len;
    len = arr.length;
    for (let i = 1; i < len; i++) {
        let tmp, j;
        tmp = arr[i];
        for (j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;

    }
    return arr;
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
    sum = insertionSort(list);
    display.value = sum.join(",");
});