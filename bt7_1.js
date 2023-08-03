// Bài 1: Cho mảng như sau:
let products = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
let products1 = [{ id: 4, name: "Lisa", count: 100 }];
// Xóa đối tượng có id là 2
products.splice(1, 1);
// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
products[1].count = 0;
// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ? Nếu Có in toàn bộ thông tin,
// nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
let but = "Butter";
let flag = true;
for (i = 0; i < products.length; i++) {
    if (products[i].name == but) {
        flag = false;
        console.log(products[i]);
    }

}
if (flag == true) {
    console.log("khong tim thay du lieu");
}