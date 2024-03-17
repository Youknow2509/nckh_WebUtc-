
var toa = [];

var toaA8 = {
    name: "A8",
    img: "../Assets/Map/A8/A8.png",
    dstang: [
        {name: "Tang 2", phong: [{name: "201", img:"../Assets/Map/A8/2/201.png"}, {name: "202", img:"../Assets/Map/A8/2/202.png"}, {name: "203", img:"../Assets/Map/A8/2/203.png"}, {name: "204", img:"../Assets/Map/A8/2/204.png"}, {name: "205", img:"../Assets/Map/A8/2/205.png"}, {name: "206", img:"../Assets/Map/A8/2/206.png"}, {name: "20N", img:"../Assets/Map/A8/2/20N.png"}]},
        {name: "Tang 3", phong: [{name: "301", img:"../Assets/Map/A8/3/301.png"}, {name: "302", img:"../Assets/Map/A8/3/302.png"}, {name: "303", img:"../Assets/Map/A8/3/303.png"}, {name: "304", img:"../Assets/Map/A8/3/304.png"}, {name: "305", img:"../Assets/Map/A8/3/305.png"}, {name: "306", img:"../Assets/Map/A8/3/306.png"}, {name: "30N", img:"../Assets/Map/A8/3/30N.png"}]},
        {name: "Tang 4", phong: [{name: "401", img:"../Assets/Map/A8/4/401.png"}, {name: "402", img:"../Assets/Map/A8/4/402.png"}, {name: "403", img:"../Assets/Map/A8/4/403.png"}, {name: "404", img:"../Assets/Map/A8/4/404.png"}, {name: "405", img:"../Assets/Map/A8/4/405.png"}, {name: "406", img:"../Assets/Map/A8/4/406.png"}, {name: "40N", img:"../Assets/Map/A8/4/40N.png"}]},
        {name: "Tang 5", phong: [{name: "501", img:"../Assets/Map/A8/5/501.png"}, {name: "502", img:"../Assets/Map/A8/5/502.png"}, {name: "503", img:"../Assets/Map/A8/5/503.png"}, {name: "504", img:"../Assets/Map/A8/5/504.png"}, {name: "505", img:"../Assets/Map/A8/5/505.png"}, {name: "506", img:"../Assets/Map/A8/5/506.png"}, {name: "50N", img:"../Assets/Map/A8/5/50N.png"}]},
        {name: "Tang 6", phong: [{name: "6DT", img:"../Assets/Map/A8/6/6DT.png"}, {name: "6TV", img:"../Assets/Map/A8/6/6TV.png"}]},
        {name: "Tang 7", phong: [{name: "7TV", img:"../Assets/Map/A8/7/7TV.png"}]}
    ]
};
// Thêm các toà vào mảng toa
toa.push(toaA8);

// Var const
const modal = document.getElementById('Modal');
console.log(modal);

// Xử lý sự kiện khi click vào nút tìm kiếm

document.getElementById('find').addEventListener('click', function() {
    var ipToa = document.getElementById('toa').value;
    var ipPhong = document.getElementById('phong').value;

    var res = handleTimKiem(ipToa, ipPhong);

    if (res.c) {
        document.getElementById('addToa').innerHTML = "Toà: " + res.toa.name;
        document.getElementById('addPhong').innerHTML = "Phòng: " + res.phong.name;
        document.getElementById('imgToa').src = res.toa.img
        document.getElementById('imgPhong').src = res.phong.img
        handleOpenModal();
    } else {
        alert("Vui lòng kiểm tra lại thông tin!");
    }
});
// Handle tim kiem 
function handleTimKiem(ipToa, ipPhong) {
    var res = {
        c: false,
        toa: {
            name:"",
            img:"",
        },
        phong: {
            name:"",
            img:"",
        }
    };
    // tim toà
    for (var i = 0; i < toa.length; i++) {
        if (toa[i].name === ipToa) {
            // duyệt tầng
            for (var j = 0; j < toa[i].dstang.length; j++) {
                // tìm phòng
                for (var k = 0; k < toa[i].dstang[j].phong.length; k++) {
                    if (toa[i].dstang[j].phong[k].name === ipPhong) {
                        res.c = true;
                        res.toa.name = toa[i].name;
                        res.toa.img = toa[i].img;
                        res.phong.name = toa[i].dstang[j].phong[k].name;
                        res.phong.img = toa[i].dstang[j].phong[k].img;
                        return res;
                    }
                }
            }
        }
    }
    return res;
}
// Handle open modal
function handleOpenModal() {
    modal.classList.add('show');
    modal.style.display = 'block';
}
// Handle close modal 
document.getElementById('closeModalButton').addEventListener('click', function() {
    modal.classList.remove('show');
    modal.style.display = 'none';
});
document.getElementById('closeModalSpan').addEventListener('click', function() {
    modal.classList.remove('show');
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
     if (event.target == modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
});