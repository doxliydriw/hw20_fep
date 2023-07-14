// Пишемо свій слайдер зображень
// відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next.Аналогічно з першим зображенням та кнопкою Prev.

const imgList = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']
const previous = document.getElementById('previous')
const next = document.getElementById('next')
previous.setAttribute('disabled', 'disabled')

function disabled(el) {
    if (imgList.indexOf(el) + 1 == imgList.length - 1) {
        console.log("last image");
        next.setAttribute('disabled', 'disabled');
    }
    if (imgList.indexOf(el) - 1 == 0) {
        console.log("first image");
        previous.setAttribute('disabled', 'disabled');
    }
    // else {
    //     next.removeAttribute('disabled');
    //     previous.removeAttribute('disabled');
    // }
}

function nextImg() {
    currentImg = document.getElementById('image');
    imgPath = currentImg.src.split('/').pop();
    disabled(imgPath);
    currentImg.src = currentImg.src.replace(imgPath, imgList[(imgList.indexOf(imgPath)) + 1]);
    console.log(imgList.indexOf(currentImg));
    if (previous.disabled) {
        previous.removeAttribute('disabled');
    }
}

function previousImg() {
    currentImg = document.getElementById('image');
    imgPath = currentImg.src.split('/').pop();
    disabled(imgPath);
    currentImg.src = currentImg.src.replace(imgPath, imgList[(imgList.indexOf(imgPath)) - 1]);
    console.log(imgList.indexOf(currentImg));
    if (next.disabled) {
        next.removeAttribute('disabled');
    }

}
