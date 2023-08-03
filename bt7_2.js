// Bài 2: Tạo một class Dog có những thuộc tính:
// Tên và tốc độ di chuyển
// Có khả năng thực hiện sủa
// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
// Tạo class Cat có những thuộc tính sau:
// Tên và tốc dộ di chuyển

class Dog {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    sound = () => {
        console.log("Gâu Gâu ");
    }
    catchCat = (Cat) => {
        if (this.speed > Cat.speed) {
            console.log("Chó Bắt được mèo");
        }
    }
}
class Cat {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    sound = () => {
        console.log("Meo meo");
    }
}

// tạo đối tượng dog
const dog = new Dog("Dog", 20)
dog.sound()  //chó sủa
// tạo đối tượng cat
const cat = new Cat("Cat", 10)
cat.sound() // mèo kêu
// chó bắt mèo
dog.catchCat(cat)
console.log(`Tốc độ của chó ${dog.speed}`);
console.log(`Tốc độ của mèo ${cat.speed} `);