function createCal() {
    let today = new Date();
    let thisYear = today.getFullYear(); // 2021년
    let thisMonth = today.getMonth(); // 3 = 4월. 0부터 시작하기 때문
    let thisDate = today.getDate(); // 6일
    let thisDay = today.getDay(); // 0:일, 1:월, 2:화, 3: 수. 4: 목, 5:금, 6:토
    console.log(thisYear);
    console.log(thisMonth);
    console.log(thisDate);
    console.log(thisDay);

    let lastDate = new Date(thisYear, thisMonth + 1, 0).getDate(); // 이번 달의 마지막 날
    let firstDate = new Date(thisYear, thisMonth, 1);
    let firstDay = firstDate.getDay();
    let days = ['일', '월', '화', '수', '목', '금', '토'];

    document.write('<h3>' + thisYear + '년' + '&nbsp' + (thisMonth + 1) + '월' + '</h3>');
    document.write('<table border="1"><tr>');
    for (let i = 0; i < 7; i++) {
        document.write('<th>' + days[i] + '</th>');
    }
    document.write('</tr><tr>');

    for (let i = 0; i < firstDay; i++) {
        document.write('<td></td>');
    }
    for (let i = 1; i <= lastDate; i++) {
        if (i % 7 == (7 - firstDay)) { // 나머지가 3이 될 때 라인 바꾸기
            document.write('<td>' + i + '</td></tr><tr>');
        } else if (i == thisDate) {
            document.write('<td style="background-color: yellow;">' + i + '</td>');
        } else {
            document.write('<td>' + i + '</td>');
        }
    }
    document.write('</tr></table>');
}