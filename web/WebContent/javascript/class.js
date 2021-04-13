class Student {
    constructor (sno, name) { // constructor : 생성자
        this.sno = sno;
        this.name = name;
    } 
    set setName(name){
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    showInfo(){ // 인스턴스 메소드
        return this.sno + ' ' + this.name;
    }
    static toShow(){    // static : 정적 메소드로 클래스 이름을 사용
        return 'Hello';
    }
}

let s1 = new Student('1111', 'Hongkildong');
console.log(s1.getName);
console.log(s1.showInfo());
console.log(Student.toShow());