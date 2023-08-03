class Apple {
    constructor(khoiLuong) {
        this.khoiLuong = khoiLuong;
    }
}

class Human {
    constructor(ten, gioiTinh, canNang) {
        this.ten = ten;
        this.gioiTinh = gioiTinh;
        this.canNang = canNang;
    }
    noi = (value) => {
        console.log(value);
    }
    anTao = (apple) => {
        if (apple.khoiLuong > 0) {
            this.canNang += 1;
            apple.khoiLuong -= 1;
        }
    }
    kiemTra = (apple) => {
        return apple.khoiLuong;
    }
}
let taoTau = new Apple(10);
let adam = new Human("Adam", "Nam", 63);
let eva = new Human("Eva", "Nữ", 43);
adam.noi("Táo trông ngon quá");
eva.noi("Mình cùng ăn thôi");
adam.anTao(taoTau);
eva.anTao(taoTau);
console.log(adam.kiemTra(taoTau));