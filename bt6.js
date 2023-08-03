// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
// Sau đó truy xuất các thuộc tính của đối tượng trên

let vanTien = {
    name: " Ngo Van Tien",
    age: 26,
    address: "Hà Nội",
    phoneNumber: "009 088 6789"

}

console.log(vanTien);

// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
//  sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự(value tự điền).Sau đó tạo mảng “students” để chứa chúng.
//  Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”

class Students {
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }
}

let newStudent1 = new Students("1", "Nguyen Van Duc Anh", "Nam", "20", 8)
let newStudent2 = new Students("1", "Nguyen Van Huy", "Nam", "20", 10)
let newStudent3 = new Students("1", "Nguyen Van Duc", "Nam", "20", 7)
let newStudent4 = new Students("1", "Nguyen Van tien", "Nam", "20", 7)
let newStudent5 = new Students("1", "Nguyen Van Thinh", "Nam", "20", 10)

console.log(newStudent1);

let student = [];
student.push(newStudent1)
student.push(newStudent2)
student.push(newStudent3)
student.push(newStudent4)
student.push(newStudent5)
console.log(student);




// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và in ra toàn bộ thông tin của học sinh đó
let index;
let max = student[0].mark
for (i = 0; i < student.length; i++) {
    if (student[i].mark > max) {
        index = i;
        max = student[i].max
    }
}
console.log(student[index]);

// Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ.
// Sau đó thêm vào mảng “students” (ở bài 2). Tính điểm trung bình của các học sinh trong mảng students trên.
// Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
let sum = 0
for (i = 0; i < student.length; i++){
    sum += student[i].mark
}
let tbc = sum / student.length 
if (tbc >= 7.5) {
    console.log("lớp khá ");
} else if (tbc >= 5 && tbc <= 7.5) {
    console.log("Lớp trung bình");
} else {
    console.log("Lớp yếu");
}

