// Bài 4: Tạo dữ liệu để có thể in ra nội dung dưới đây:
let id = 1;
class School {
    constructor(name, complete) {
        this.id = id++;
        this.name = name;
        this.complete = complete;
    }
}

let school1 = new School("HTML", "False")
let school2 = new School("CSS", "False")
let school3 = new School("Basic of javascrip", "False")
let school4 = new School("Node package Manager(npm)", "False")
let school5 = new School("Git", "False")

let aclass = [];
aclass.push(school1);
aclass.push(school2);
aclass.push(school3);
aclass.push(school4);
aclass.push(school5);
console.log(aclass);

// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
let luaChon = prompt("Nhập vàoC/R/U/D/ và E để kết thúc chương trình").toLocaleLowerCase();

// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
// Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
while (true) {
    if (luaChon == "c") {
        let newCouse = prompt("Nhập vào khóa học mới  ")
        let status = prompt("Nhập vào trạng thái hoàn thành")
        aclass.push(new School(newCouse, status))
        console.log(aclass);
    } else if (luaChon == "r") { // R – In ra toàn bộ các khóa học theo mẫu trên
        console.log(luaChon);
    } else if (luaChon == "u") {
        // U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho người dùng nhập vào tên muốn update
        // và trạng thái mới.Update xong in lại như trên
        let update = prompt("Vị trí bạn muốn update")
        check = true
        for (i = 0; i < aclass.length; i++) {
            if (aclass[i].id == update) {
                check = false
                aclass[i].name = prompt("Nhập tên muốn update")
                aclass[i].complete = prompt("Nhập trạng thái muốn update")
            }
        }
        if (check == true) {
            console.log("Không tồn tại");
        }
    } else if (luaChon == "d") {
        // D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
        let deletee = prompt("Vị trí bạn muốn xóa ")
        check = true
        for (i = 0; i < aclass.length; i++) {
            if (aclass[i].id == deletee) {
                ckeck = false
                aclass.splice(i, 1)
            }
        }
        if (check == false) {
            console.log("Không tìm được");
        }
        // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ
        // thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
    } else if (luaChon == "e") {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        break;
       
    } else {
        
    }
     luaChon = prompt("Nhập vàoC/R/U/D/ và E để kết thúc chương trình").toLocaleLowerCase();

}








