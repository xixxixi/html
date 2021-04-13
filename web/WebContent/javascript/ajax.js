// <table id ='tbl' border="1"></table>

let trTag, tdTag, text;
let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    console.log(xhtp.readyState, xhtp.status);
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        console.log(data);

        for (obj of data) { // indext 값 0~14까지 받아옴
            trTag = document.createElement('tr');
            for (field in obj) { // id, first_name, last_name... 각각의 값들을 읽어옴
                tdTag = document.createElement('td');
                console.log(field, obj[field]);
                
                tdTag.appendChild(text);

            }
        }
        trTag.appendChild(tdTag);
        tbl.appendChild(trTag);
    }
}
xhtp.open('get', 'MOCK_DATA.json');
xhtp.send();