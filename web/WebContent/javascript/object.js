let car = {
    name: 'Sonata', // name 필드
    model: 'Hybrid',
    weight: 1200,
    color: 'black',
    start: function () {
        console.log('출발합니다.');
    },
    stop: function () {
        console.log('정지합니다.');
    }
};
car.name = 'Sonata II';
car.model = 'Electronic';
car['weight'] = 2200;
car['color'] = 'blue';
car.start();
car.stop();
// object의 필드 for .. in
for(field in car){
    console.log(field + ' => ' + car[field]); // 필드 값으로 가져옴
}

let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
    fruits[i];
}
// 확장 for
for (fruit of fruits) {
    console.log(fruit); // 인덱스 값으로 가져옴
}

let elem = document.getElementById('list');
for( fruit of fruits){
    let liTag = document.createElement('li');
    let text = document.createTextNode(fruit);
    liTag.appendChild(text);
    elem.appendChild(liTag);
}
let memList = document.getElementById('members');
let m1 = {name: 'Hong', score: 80}
let m2 = {name: 'Hwang', score: 90}
let m3 = {name: 'Park', score: 70}
let members = [m1, m2, m3];
for (let member of members){
    let liTag = document.createElement('li');
    for(let field in member){
        console.log(field, member[field]);
        let text = document.createTextNode(member[field]);
        liTag.appendChild(text);
        memList.appendChild(liTag);
    }
}