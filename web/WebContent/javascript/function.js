        // 정의문
        function square(num) { // 타입 선언이 필요 없음
            if (num == null) {
                return 0;
            } else if (isNaN(num)) {
                return 0;
            }
            return num * num;
        }
        let result = square(3);

        // 표현식
        let fnc = function (num) {
            return num * num
        }
        console.log(fnc(3));

        //
        let count = 0; // 전역변수. function마다 값이 누적됨
        function myFnc() {
            let cnt = 0; // 로컬변수. 여러번 호출 하더라도 function 내에서 새롭게 초기화 됨.
            count++;
            cnt++;
            document.write(cnt + '<br>');
        }
        myFnc(); // function 실행 구문이 있어야 함

        let theFnc = function () {
            let cnt = 0;
            count++;
            cnt++;
            document.write(cnt + '<br>');
        }
        theFnc();



        let colors = ['yellow', 'red', 'blue', 'aqua']
        let i = 0;

        function changeColor() {
            let bdy = document.getElementsByTagName('body');
            // console.log(bdy[0]);
            // bdy = document.getElementById('bdy');
            console.log(bdy);
            bdy[0].style.backgroundColor = colors[i % 4];
            i++;

        }


        function map(func, ary) {
            let result = [];
            for (let i = 0; i < ary.length; i++) {
                result[i] = func(ary[i]);
            }
            return result;
        }
        let fun = function (x) {
            return x * x;
        }
        let arr = [0, 1, 2, 4];
        let result = map(fun, arr);
        console.log(result);



        function callFunc() {
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
        console.log(callFunc(2, 3, 4, 5, 6, 7));

        function callArySum(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
        let aryy = [1, 2, 3, 4, 5];
        console.log(callArySum(aryy));

        // 재귀함수
        let factorial = function (num) {
            return num < 2 ? 1 : num * factorial(num - 1);
        }
        result = factorial(5);
        console.log(result);

        //
        function outside(x) {
            function inside(y) {
                return x + y;
            }
            return inside;
        }
        let fn_inside = outside(2);
        let res = fn_inside(3); // outside(2)(3)
        console.log(res);

        res = outside(2)(3);
        console.log(res);