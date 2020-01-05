let input, send, output, display, sort, array, bubbleSort;

input = document.querySelector("#input");
send = document.querySelector("#send");
display = document.querySelector("#display");
output = document.querySelector("#output");
sort = document.querySelector("#sort");
array = [];

bubbleSort = (arr) => {
    let count;
    count = arr.length - 1;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp;
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    array.push(val);
    display.value = array.join(", ");
    input.value = "";
});

sort.addEventListener("click", () => {
    bubbleSort(array);
    output.value = array.join(", ");
});









