// let num2 = 30; // index에서 참조하고 있는 basic에서 선언했기 때문에 오류남

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
document.write('<h1>Number</h1>');
document.write('<ul>')
for (let i = 0; i < numbers.length; i++) {
    document.write('<li>' + numbers[i] + '</li>');
    sum += numbers[i];
}
document.write('<li>합: ' + sum + '</li>');
document.write('</ul>')