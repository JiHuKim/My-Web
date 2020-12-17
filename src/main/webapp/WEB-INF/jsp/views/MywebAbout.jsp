<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/MywebEvent.js'/>"></script>
<script type="text/javascript">
window.onload = function(){
	var f_name = document.headerform;
	var main_h1 = document.getElementById('main_h1');
	var aboutbtn = document.getElementById('aboutbtn');
	var historybtn = document.getElementById('historybtn');
	var servicebtn = document.getElementById('servicebtn');

	textChange(main_h1,"About");
	
	goEvent(f_name,aboutbtn,"/about.do");
	goEvent(f_name,historybtn,"/history.do");
	goEvent(f_name,servicebtn,"/service.do");
	
}
</script>


<title>My Web About</title>
</head>
<body>
<div>About페이지로 이동</div>
</body>
<script type="text/javascript" src="<c:url value='/js/MywebUp.js'/>"></script>

</html>