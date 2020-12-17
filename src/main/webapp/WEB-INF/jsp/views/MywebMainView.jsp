<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My web Main</title>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="<c:url value='/js/MywebEvent.js'/>"></script>
<script type="text/javascript">
window.onload = function(){
	var f_name = document.headerform;
	var main_h1 = document.getElementById('main_h1');
	var aboutbtn = document.getElementById('aboutbtn');
	var historybtn = document.getElementById('historybtn');
	var servicebtn = document.getElementById('servicebtn');
	
	textChange(main_h1,"My Web");
	
	goEvent(f_name,aboutbtn,"/about.do");
	goEvent(f_name,historybtn,"/history.do");
	goEvent(f_name,servicebtn,"/service.do");
	
} 
</script>
</head>
<body>
<!-- <header>
<form>
<h1 id="mywebmain">My Web</h1>
<div>
<input id="aboutbtn" class="gobtn" type="button" value="About"/>
<input id="historybtn" class="gobtn" type="button" value="History"/>
<input id="servicebtn" class="gobtn" type="button" value="Service"/>
<input id="loginbtn" class="gobtn" type="button" value="Login"/>
</div>
</form>
</header> -->
<main>
<div>
main
</div>
</main>

</body>
<script type="text/javascript" src="<c:url value='/js/MywebUp.js'/>"></script>


</html>