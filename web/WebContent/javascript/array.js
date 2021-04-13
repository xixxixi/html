let names = []; // = new Array();
names[0] = 'Hong';
names.push('임성원');
names.push('정준영'); // 배열의 맨 뒤쪽에 추가
names.unshift('도왕락'); // 배열의 맨 앞쪽에 추가

delete names[0]; // 값을 지움. undifiend
names.pop(); // 제일 뒤쪽 요소부터 제거
names.shift(); // 제일 앞쪽 요소부터 제거


for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}
let ns = names.join(', ');
console.log(ns);

ns = names.reverse();
console.log(ns);

names.reverse();
names.push('김민주');

ns = names.slice(1, 2);
console.log(ns);