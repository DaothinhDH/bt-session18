function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 10;
    this.getHeroElement = function () {
        return `<img width="${this.size}"
           height="${this.size}"
           src="${this.image}"
           style="top:${this.top}px;left:${this.left}px;position:absolute;" />`;
    }

    this.moveRight = function () {
        this.left += this.speed;
        console.log('move phai: ' + this.left);
    }
    this.moveBottom = function () {
        this.top += this.speed;
        console.log('move duoi:' + this.top);
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('move trai:' + this.left);
    }
    this.moveTop = function () {
        this.top -= this.speed;
        console.log('move tren:' + this.top);
    }
}

var hero = new Hero('bbi0.jpg', 20, 30, 200);

let chieuRongBanDau = window.innerWidth
let chieuCaoBanDau = window.innerHeight

let daSangPhai = false
let daXuongDuoi = false

let mocTren = hero.top
let mocTrai = hero.left
function start() {
    if ((hero.left < chieuRongBanDau - hero.size) && daSangPhai == false) {
        // daXuongDuoi = false
        hero.moveRight();
    } else if ((hero.top < chieuCaoBanDau - hero.size - 20) && daXuongDuoi == false) {
        daSangPhai = true
        hero.moveBottom();
    } else if ((hero.left > mocTrai) && daSangPhai == true) {
        daXuongDuoi = true
        hero.moveLeft()
    } else if ((hero.top > mocTren) && daXuongDuoi == true) {
        // daSangPhai = false
        hero.moveTop()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 5)
}

start();