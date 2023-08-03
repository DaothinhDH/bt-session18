// Viết một lớp mô tả đối tượng chuột lấy tên là Rat, với những đặc điểm được mô tả như sau:
// Có thuộc tính tên.
// Có thuộc tính khối lượng.
// Có thuộc tính tốc độ.
// Có thuộc tính mô tả trạng thái: sống, chết.
// Có khả năng thực hiện hành vi kêu(ví dụ “chít, chít”)
class Rat {
    constructor(khoiLuong, tocDo) {
        this.ten = "Jerry";
        this.khoiLuong = khoiLuong;
        this.tocDo = tocDo;
        this.status = true;
    }
    keu = () => {
        console.log("Chít, chít");
    }
}

// Viết một lớp mô tả đối tượng mèo lấy tên là Cat với những đặc điểm được mô tả như sau:
// Có thuộc tính tên.
// Có thuộc tính khối lượng.
// Có thuộc tính tốc độ di chuyển tối đa.
// Có khả năng thực hiện hành vi kêu(ví dụ: “meo meo”).
// Có khả năng bắt chuột, mỗi lần chỉ bắt được một con.Chỉ bắt được chuột khi tốc độ của mèo lớn hơn tốc độ của chuột.
// Có khả năng ăn thịt chuột.Chỉ ăn chuột còn sống.Khi ăn, khối lượng của mèo tăng lên tương ứng.
class Cat {
    constructor(khoiLuong, tocDoToiDa) {
        this.ten = "Tom"
        this.khoiLuong = khoiLuong;
        this.tocDoToiDa = tocDoToiDa;
    }
    batChuot = (Rat) => {
        if (this.tocDoToiDa > Rat.tocDo) {
            console.log("Bắt được chuột");
        }
    }
    anThitChuot = (Rat) => {
        if (Rat.status) {
            this.khoiLuong = this.khoiLuong + Rat.khoiLuong;
            console.log("Ăn thịt chuột");
        }
    }
    keu = () => {
        console.log("Meo meo");
    }
}
let jerry = new Rat(1, 20);
let tom = new Cat(6, 40);
jerry.keu();
tom.keu()
tom.batChuot(jerry);
tom.anThitChuot(jerry);
console.log(tom.khoiLuong);