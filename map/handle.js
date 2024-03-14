
var toa = [];

var toaA8 = {
    name: "A8",
    img: "https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg",
    dstang: [
        {name: "Tang 1", phong: [{name: "101", img:""}, {name: "102", img:""}, {name: "103", img:""}, {name: "104", img:""}, {name: "105", img:""}]},
        {name: "Tang 2", phong: [{name: "201", img:""}, {name: "202", img:""}, {name: "203", img:""}, {name: "204", img:""}, {name: "205", img:""}]},
        {name: "Tang 3", phong: [{name: "301", img:""}, {name: "302", img:""}, {name: "303", img:""}, {name: "304", img:""}, {name: "305", img:""}]},
        {name: "Tang 4", phong: [{name: "401", img:""}, {name: "402", img:""}, {name: "403", img:""}, {name: "404", img:""}, {name: "405", img:""}]},
        {name: "Tang 5", phong: [{name: "501", img:""}, {name: "502", img:""}, {name: "503", img:""}, {name: "504", img:""}, {name: "505", img:""}]},
        {name: "Tang 6", phong: [{name: "601", img:""}, {name: "602", img:""}, {name: "603", img:""}, {name: "604", img:""}, {name: "605", img:""}]},
        {name: "Tang 7", phong: [{name: "701", img:""}, {name: "702", img:""}, {name: "703", img:""}, {name: "704", img:""}, {name: "705", img:""}]},
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
        document.getElementById('imgToa').src = "https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg"  
        // Để tạm link kia để gán sau + res.toa.img;
        document.getElementById('imgPhong').src = "https://storage.googleapis.com/digital-platform/hinh_anh_phong_ngu_master_la_gi_nhung_luu_y_khi_thiet_ke_phong_ngu_master_so_4_cef2fb3218/hinh_anh_phong_ngu_master_la_gi_nhung_luu_y_khi_thiet_ke_phong_ngu_master_so_4_cef2fb3218.jpg";
        // Để tạm link kia để gán sau + res.phong.img;
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