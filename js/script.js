const images = [
    'images/nizam.png',
    'images/nizam3.jpeg',
    'images/nizam.png',
    'images/nizam4.png',
    'images/nizam1.jpeg',
    'images/nizam5.JPG'
];

let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)

// text animation
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// download pdf
function downloadPDF() {
    const link = document.createElement('a');
    link.href = "images/Resume-of-MD-NIZAM-UDDIN.pdf";
    link.download = 'Resume-of-MD-NIZAM-UDDIN.pdf';
    link.click();
}

// Testmonials
// Slider Desktop
let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
