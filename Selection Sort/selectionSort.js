let input, output, display, send, sort, array, selectionSort;

input = document.querySelector("#input");
output = document.querySelector("#output");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");

array = [];


selectionSort = (arr) => {
    let count
    count = arr.length;
    for (let i = 0; i < count; i++) {
        let min;
        min = i;
        for (let j = i + 1; j < count; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp;
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    array.push(val);
    display.value = array.join(", ");
    input.value = "";
});


sort.addEventListener("click", () => {
    let sum;
    sum = selectionSort(array);
    output.value = sum.join(", ");
})








