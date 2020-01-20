let input, array, display, send, sort, list, insertionSort;

// Html dökümanı üzerindeki gerekli yerler yakalandı
input = document.querySelector("#input");
array = document.querySelector("#array");
display = document.querySelector("#display");
send = document.querySelector("#send");
sort = document.querySelector("#sort");
list = [];

// insertionSort fonksiyonuna arr parametresi gönderildi
insertionSort = (arr) => {
    let len;
    // len değişkenine arr array'inin length'i tanımlandı
    len = arr.length;
    // Döngü array'in uzunluğu kadar çalıştı 
    for (let i = 1; i < len; i++) {
        let tmp, j;
        // tmp değişkeni içerisine array'in mevcut indisindeki eleman tanımlandı
        tmp = arr[i];
        // array üzerinde ilerledikçe içeride yeni array oluşturduğunu düşün ve yeniden 
        // yaratıldığını farz et eski arrayden mevcut indisteki elamanı alıp yeni 
        // array'de uygun yere atıyor ta ki eski arraydeki tüm elemanlar gezilene kadar 
        for (j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;

    }
    // array'in son hali fonksiyonun çağırıldığı yere gönderildi
    return arr;
}
// send değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    // val değişkenine input değişkeninin value'si tanımlanıp list array'i içerisine push methodu ile atılıyor
    list.push(val);
    // array değişkeninin valusine list değişkeni tanımlanıyor elemanlar arasında "," görünmesi için join methodu kullanıldı
    array.value = list.join(",");
    input.value = "";
});
// sort değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
sort.addEventListener("click", () => {
    let sum;
    // list değişkeni insertionSort fonksiyonu içerisine gönderildi fonksiyondan dönen değer sum değişkeni içerisine tanımlandı
    sum = insertionSort(list);
    // display değişkeninin valusine sum değişkeni tanımlanıyor elemanlar arasında "," görünmesi için join methodu kullanıldı
    display.value = sum.join(",");
});