let input, send, output, display, sort, array, bubbleSort;

// Html dökümanı üzerindeki gerekli elementler yakalandı
input = document.querySelector("#input");
send = document.querySelector("#send");
display = document.querySelector("#display");
output = document.querySelector("#output");
sort = document.querySelector("#sort");
array = [];


bubbleSort = (arr) => {
    // count değişkeni tanımlandı içerisine fonksiyona gönderilen arr arrayinin 
    // uzunluğunun 1 eksiği tanımlandı çünkü arrayler 0'dan başlar döngünün  
    // fazla çalışmasını önlemek için bu yapıldı
    let count;
    count = arr.length - 1;
    for (let i = 0; i < count; i++) {
        // Aşağıdaki koşulda count-i yazılmasının sebebi bubble sort ilk 
        // çalıştığında array'in en büyük elemanını bulup en sona kaydırdı  
        // her işlem basamağında en büyüğü en sona kaydırır o yüzden işlemler 
        // yapıldıkça sondaki elemanı kontrol etmemiz gerekmez zaten o 
        // kontrol edilenlerin en büyüğüdür 
        for (let j = 0; j < count - i; j++) {
            // Aşağıdaki koşul kısaca soldaki eleman sağdaki elemandan büyükse sağlanmış olur 
            if (arr[j] > arr[j + 1]) {
                let temp;
                // soldaki eleman temp değişkeni içerisine tanımlandı
                // sağdaki değişken soldaki değişkenin içerisine tanımlandı
                // temp değişkeni sağdaki değişkene tanımlandı
                // swap işlemi yapılmış oldu (yer değişikliği) 
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// send değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
send.addEventListener("click", () => {
    let val;
    // input değişkeninin valuesi  number tipine çevirilerek val değişkeni içerisine tanımlandı
    val = Number(input.value);
    // val değişkeni push methodu ile array değişkenin içerisine atıldı array değişkeni yukarıda tanımlanan boş array
    array.push(val);
    // display değişkeninin valuesine array değişkeni arada ", " olacak şekilde yazdırıldı
    display.value = array.join(", ");
    // input değişkeninin valuesi temizlendi
    input.value = "";
});

// sort değişkenine click event'i gerçekleştiğinde aşağıdaki fonkisyon çalışır
sort.addEventListener("click", () => {
    // bubbleSort fonksiyonu içerisne array değişkenini gönderdik
    bubbleSort(array);
    // output değişkeninin valuesine array değişkeni arada ", " olacak şekilde yazdırıldı
    output.value = array.join(", ");
});