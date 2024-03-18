
const res = ['B', 'C', 'C', 'D', 'C', 'B', 'C', 'B', 'A','B','A','A','A','A','A','A'];
const form = document.getElementById('quizForm');
var result = 0;
// Handle form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    for (var i = 0; i < res.length; i++) {
        var selectedValue = document.querySelector('input[name="question' + (i + 1) + '"]:checked');
        if (selectedValue !== null) {
            console.log(selectedValue.value); // Ví dụ: in giá trị
            if (selectedValue.value === res[i]) {
                result++;
            }
        } else {
            console.log('Chưa chọn câu trả lời:' + (i + 1));
        }
    }
    alert('So diem cua ban la: ' + result + "/16");
});

