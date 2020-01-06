let input, output, display, send, sort, array, selectionSort;

// Html dökümanı üzerindeki gerekli elementler yakalandı
input = document.querySelector("#input");
output = document.querySelector("#output");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");

array = [];


selectionSort = (arr) => {
    // Sürekli uzun uzun array.length yazmak yerine count değişkenine arr.length tanımlandı
    let count;
    count = arr.length;
    for (let i = 0; i < count; i++) {
        // Buradaki min değerinin tanımlanması selectionsortun özelliğinden kaynaklanmakta.
        // Array kontrol edilmeye soldan başlanıyor bu yüzden ilk for'dan çıkan değer mevcut 
        // indisi veriyor ve eğer o indisteki elemandan daha küçük bir elemanla karşılaşılırsa 
        // yeni değerin mevcut indise yazılması gerekli bu yüzden mevcut indisi min 
        // değişkeni içerisinde tutuyoruz
        let min;
        min = i;
        for (let j = i + 1; j < count; j++) {
            // Eğer mevcut indisteki değerden daha küçük bir değişkene denk gelirsek koşul 
            // sağlanmış olur ve if bloğu içerisine gireriz
            if (arr[min] > arr[j]) {
                // Yeni min indisimiz j olur çünkü j indisinde buunan değer min indisinde bulunan değerden daha küçük
                min = j;
            }
        }
        // Buradaki koşulda eğer min i'ye eşit değilse yani yukarıdaki kontrollerde mevcut değerden daha küçük bir 
        // değere rastlanmışsa min değişmiştir ve koşul sağlanmış olur.
        if (min !== i) {
            // arr[i] => mevcut değer,bu değer array'in kendinin sağındaki diğer elemanları ile kontrol edildi
            // arr[min] => kontrol sonrası mevcut değerden daha küçük olan en küçük değer
            // Aşağıdaki işlem swap işlemi
            let temp;
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    // Fonksiyonun çağırıldığı yere arr değişkeni döndürüldü 
    return arr;
}

// send değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
send.addEventListener("click", () => {
    let val;
    // input değişkeninin value'si number tipine çevirilerek val değişkeni içerisine atıldı
    val = Number(input.value);
    // val değişlkeni array içerisine push methoduyla atıldı
    array.push(val);
    // display değişkeninin valuesine array tanımlandı ancak değerler arasında ", " var join methodu sayesinde
    display.value = array.join(", ");
    input.value = "";
});

// sort değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
sort.addEventListener("click", () => {
    let sum;
    // sum değişkenine selectionSort fonksiyonundan dönen değer tanımlandı
    sum = selectionSort(array);
    // output değişkeninin valuesine sum tanımlandı ancak değerler arasında ", " var join methodu sayesinde
    output.value = sum.join(", ");
});








