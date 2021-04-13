{/* <input type="text" name="firstVal" id="firstVal"></input>
<input type="text" name="oper" id="oper" value="+"></input>
<input type="text" name="lastVal" id="lastVal">
<span>=</span>
<input type="text" name="result" id="result" readonly></input> */}
let lv = document.getElementById('lastVal');
        lv.onchange = calFnc;

        // 계산 후 결과물 result
        function calFnc() {
            let fv = document.getElementById('firstVal').value;
            let op = document.getElementById('oper').value;
            let lv = document.getElementById('lastVal').value;
            let rst = document.getElementById('result');

            rst.value = cal(fv, lv, op);
        }

        function cal(f, l, o) {
            let fval = parseInt(f);
            let lval = parseInt(l);
            let result = 0;
            if (o == '+') {
                result = fval + lval;
            } else if (o == '-') {
                result = fval - lval;
            } else if (o == '*') {
                result = fval * lval;
            } else if (o == '/') {
                result = fval / lval;
            }
            return result;
        }