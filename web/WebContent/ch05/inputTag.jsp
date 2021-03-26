<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	String name = request.getParameter("name");
	String sex = request.getParameter("sex");
	String year = request.getParameter("year");
	%>
	<section>
		<article>
			<table border="1">
				<tr>
					<td>이름</td>
					<td><%=name%></td>
				</tr>
				<tr>
					<td>성별</td>
					<td><%=sex%></td>
				</tr>
				<tr>
					<td>학년</td>
					<td><%=year%></td>
				</tr>



				<tr>
					<td>관심</td>
				<%
				String[] subjects = request.getParameterValues("subjects");
				for (int i = 0; i < subjects.length; i++) {
					String str = subjects[i];
				%>

					<td><%=str%></td>
				</tr>

				<%
				}
				%>

				<tr>
					<td rowspan="2">취미</td>
				<%
				String[] hobby = request.getParameterValues("hobby");
				for (int i = 0; i < subjects.length; i++) {
					String str = hobby[i];
					
				%>
	
					<td><%=str%></td>
				</tr>

				<%
				}
				%>
			</table>
		</article>
	</section>
</body>
</html>