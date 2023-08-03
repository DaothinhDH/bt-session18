// Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.
// Tạo class Admin kế thừa từ class User. Thêm thuộc tính “role” vào 2 đối tượng Admin(value = 1) và User(value = 0)
// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin
// Xóa người dùng thông qua tên của họ(không xóa được admin)
// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
// Thêm 1 nick admin vào mảng danh sách người dùng.Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra

// Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại
let list = [];
class User { //Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.
    role = 0  //Thêm thuộc tính “role” vào User(value = 0)
    constructor(name, email, address, phoneNumber) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;

    }
}
class Admin extends User { //Tạo class Admin kế thừa từ class User.
    role = 1;  // Thêm thuộc tính “role” vào Admin(value = 0)
    constructor(name, email, address, phoneNumber) {
        super(name, email, address, phoneNumber,);

    }

}
// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin

let userName1 = new User("A", "Nguyenvan@gmail.com", "Ha Noi", "098xxx xxx");
let userName2 = new User("B", "Nguyenvan@gmail.com", "Ha Noi", "098xxx xxx");
let userName3 = new User("C", "Nguyenvan@gmail.com", "Ha Noi", "098xxx xxx");
let admin = new Admin("D", "Nguyenvan@gmail.com", "Ha Noi", "098xxx xxx");
list.push(userName1, userName2, userName3, admin);
console.log(list);

//  Xóa người dùng thông qua tên của họ(không xóa được admin)
// let del = prompt("Hãy nhập tên người dùng bạn muốn xóa");
// flag = false;
// for (i = 0; i < list.length; i++) {
//     if (list[i].name == del) {
//         if (list[i].role == 0) {
//             flag = true
//             list.splice(i, 1)
//         } else if (list[i].role == 1) {
//             flag = true
//             console.log("Không thể xóa");
//         }
//     }
// }
// if (flag = false) {
//     console.log("Không hợp lệ");
// }
// console.log(list);

// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)
let fix = prompt("Nhập ID muốn sửa");

for (i = 0; i < list.length; i++){
    if (list[i].name == fix) {
        if (list[i].role == 0) {
            list[i].name = prompt("Nhập tên muốn sửa ")
            list[i].email = prompt("Nhập email muốn sửa ")
            list[i].address = prompt("Nhập địa chỉ muốn sửa ")
            list[i].phoneNumber = prompt("Nhập số điện thoại muốn sửa ")
        } else if(list[i].role =1) {
            console.log("Không thể sửa được thông tin admin");
        }
    }
}
console.log(list);

// Thêm 1 nick admin vào mảng danh sách người dùng.Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// let admin2 = new Admin("E", "Nguyenvan@gmail.com", "Ha Noi", "098xxx xxx");
// list.push(admin2)
// let findAdmin = list.filter((value) => {
//     return 1 == value.role
// });
// console.log(findAdmin);

