let products = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
let carts = []
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào tên sản phẩm muốn mua.Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
// R – In ra toàn bộ các sản phẩm trong stores và carts
// U – Hỏi người dùng vị trí update trong carts.Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi
// và khi đó count trong stores cũng cập nhật theo.Update xong in lại stores và carts
// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình
// và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

while (true) {
    // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
    let luaChon = prompt("Nhập vào C / R / U / D / E").toLocaleLowerCase();
    // C – Cho người dùng nhập vào tên sản phẩm muốn mua.Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
    if (luaChon = "c") {
        let spMuonMua = prompt("nhập vào tên sản phẩm muốn mua");
        // tìm trước hai vị trí của sản phẩm muốn mua ở trong hai mảng để lát nữa tăng giảm số lượng còn biết tăng giảm vào đâu
        let viTriCart = carts.findIndex(value => value.name == spMuonMua);
        let viTriStore = stores.findIndex(value => value.name == spMuonMua);
        // Nếu tìm thấy sản phẩm đã được mua ở trong cart rồi thì bây giờ tăng số lượng của sản phẩm đó trong cart lên 1 và đương nhiêm là
        // phải giảm sản phẩm đó trong cửa hàng(store) đi 1
        if (viTriCart >= 0) {
            carts[viTriCart].count++
            stores[viTriStore].count--
        } else {// ngược lại nếu sản phẩm muốn mua chưa từng được mua(ko tìm thấy trong cart) thì thêm sản phẩm đó vào cart
            // thông tin cần thêm là {id, name, count: 1} count phải là 1 vì đây là mới mua lần đầu
            // không được carts.push({stores[viTriTrongStore]) vì như vậy sẽ là mua hết sạch sản phẩm đó trong cửa hàng
            if (viTriStore >= 0) {
                carts.push({ id: stores[viTriStore].id, name: stores[viTriStore].name, count: 1 })
                stores[viTriStore].count--
                console.log("Store sau khi mua: ", stores);
                console.log("Cart sau khi mua: ", carts);
            } else {
                console.log("Không có mặt hàng này");

            }
        }
    } else if (luaChon = "r") { //R – In ra toàn bộ các sản phẩm trong stores và carts
        console.log("stores" + stores);
        console.log("carts" + stores);
    } else if (luaChon = "u") {
        let viTriUpdateCart;
        // dùng do while để bắt người dùng nhập đúng vị trí hợp lệ
        do {
            viTriUpdateCart = +prompt("Nhập vị trí bạn muốn sửa trong Cart")
        } while (viTriUpdateCart < 0 || viTriUpdateCart > carts.length - 1) {
            // sau khi nhập được vị trí rồi thì cho nhập số lượng muốn thay đổi
            let ThayDoi = +prompt("Nhap so luong muon thay doi");
            // tìm vị trí của sản phẩm trong cửa hàng(store), tên sản phẩm muốn update sẽ bằng  carts[viTriUpdateTrongCart].name
            // dùng findIndex để tìm coi sai phẩm đó nằm đâu trong cửa hàng
            let viTriSanPhamStore = stores.findIndex(value => value.name == carts[viTriUpdateCart].name)
            //  sau khi tìm thấy sản phẩm nằm ở đâu rồi thì chỉnh số lượng trong cửa hàng và trong giỏ hàng, sẽ xảy ra hai trường hợp
            // nếu số lượng muốn đổi lớn hơn số lượng muốn mua lúc đầu thì phải giảm bớt trong kho
            if (ThayDoi > carts[viTriUpdateCart].count) {
                stores[viTriSanPhamStore].count -= (ThayDoi - carts[viTriUpdateCart].count)
                carts[viTriUpdateCart].count = ThayDoi
            } else { // ngược lại số lượng muốn đổi mà ít hơn thì phải trả lại số lượng thừa cho kho
                stores[viTriSanPhamStore].count += (carts[viTriUpdateCart].count - ThayDoi)
                carts[viTriUpdateCart].count = ThayDoi

            }
            console.log("Store sau khi update: ", stores);
            console.log("Cart sau khi update: ", carts);
        }
    } else if (luaChon = "d") { //D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
        let viTriXoa;
        do {
            viTriXoa = prompt("Nhap vi tri muon sua trong carts")

        } while (viTriXoa < 0 || viTriXoa > carts.length - 1);
        // dùng hàm splice để xóa, tham số đầu tiên là vị trí cần xóa, tham số thứ 2 là mình muốn xóa mấy phần tử tính từ vị trí bắt đầu
        carts.splice(viTriXoa, 1)
        console.log("Cart sau xoa: ", carts);

    } else if (luaChon = "e" || luaChon == undefined) {
        // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình
        // và thông báo “Cảm ơn bạn đã đến với Rikkei Stores
        console.log("Cảm ơn bạn đã đến với Rikkei Stores");
        break;
    }
}