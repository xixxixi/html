// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
$(document).ready(function () {
    $.ajax({
        url: '../MOCK_DATA.json',
        success: function (data) {
            let table = [];
            table.push('<table border="1">');
            console.log(data);
            for (let i = 0; i < data.length; i++) { // row 단위 : 한 건씩 가져오는 반복문
                table.push('<tr>');
                for (field in data[i]) { // field 단위
                    table.push('<td>' + data[i][field] + '</td>');
                }
                table.push('</tr>');
            }
            table.push('</table>');
            let tag = table.join('');
            $('body').html(tag);
        }
    });
});


$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
    data: 'name=hong&age=20',
    dataType: 'json',
    success: function (data) {
        let arry = data;
        let ulTag = $('<ul />');
        $(arry).each(function (idx, obj) {
            console.log(idx, obj);
            // ulTag.append($('<li />').html('<a href="#">' + obj.first_name + '</a>'));
            ulTag.append($('<li />').append($('<a />').html(obj.first_name).attr('href',
                'get.jsp?name=' + obj.first_name)));
        });
        $('body').append(ulTag);
    },
    error: function (reject) {
        console.error(reject.status, reject.statusText);
    }
});