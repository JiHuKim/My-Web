<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="<c:url value='/css/MywebUp.css?ver=3'/>" rel="stylesheet" type="text/css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/MywebEvent.js?ver=1'/>"></script>
<script type="text/javascript">
window.onload = function(){
	var f_name = document.headerform;
	var main_h1 = document.getElementById('main_h1');
	var mainbtn = document.getElementById('mainbtn');
	var aboutbtn = document.getElementById('aboutbtn');
	var historybtn = document.getElementById('historybtn');
	var servicebtn = document.getElementById('servicebtn');
	var menubtn = document.getElementById('menubtn');

	var navbtn = [];
	for(var i=0; i<document.getElementsByName('navbtn').length; i++){
		navbtn[i] =document.getElementsByName('navbtn')[i];
	}
	
	textChange(main_h1,"Service");
	
	goEvent(f_name,mainbtn,"/main.do","get");
	goEvent(f_name,aboutbtn,"/about.do","post");
	goEvent(f_name,historybtn,"/history.do","post");
	goEvent(f_name,servicebtn,"/service.do","post");
	
	menuToggle(menubtn,navbtn);
}
</script>
<title>My Web Service</title>
</head>
<body>
<div>Service페이지로 이동</div>
</body>
<script type="text/javascript" src="<c:url value='/js/MywebUp.js?ver=2'/>"></script>
</html>