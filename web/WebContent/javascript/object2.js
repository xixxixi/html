let obj = {}; // = new Object();
obj.color = 'white';
obj.price = 1000000;
obj.info = function () {
    return obj.color + ' ' + obj.price;
}
console.log(obj.color);
console.log(obj.price);
console.log(obj.info());

let show = document.getElementById('show');

function getTime() {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let date = time.getDate();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    show.innerHTML = year + '년 ' + (month + 1) + '월 ' + date + '일 ' +
        hh + ':' + mm + ':' + ss;
}
// setInterval(function () {
//     getTime();
// }, 1000); // 1000msc = 1초 단위로 실행
var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31); // 올해 연말에 대한 날짜 정보 생성
var diffDate = theDate.getTime() - today.getTime(); // 남은 날 = 특정 날짜 - 현재 날짜(밀리초 단위)

var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
document.write("연말 D-day: " + result + "일 남았습니다.");

// function lunchTime() {
//     let time = new Date();
//     let hh = time.getHours();
//     let mm = time.getMinutes();
//     let ss = time.getSeconds();
// }
// var today = new Date();
// var nowday = today.getTime();
// var theDate = new Date(12, 50, 00);
// var diffDate = theDate.lunchTime() - today.lunchTime();


Math.abs(-100);
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 45) + 1);
}
console.log(Math.max(2, 4, 6, 1, -1));