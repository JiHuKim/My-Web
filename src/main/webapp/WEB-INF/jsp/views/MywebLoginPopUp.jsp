<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Web Login</title>
</head>
<body>
<form name="loginform">
	<div id="divid"><p>아이디:</p><input type="text" id="idline" required="required" placeholder="아이디를 입력해주세요."/></div>
	<div id="divpassword"><p>비밀번호:</p><input type="text" id="passwordline" required="required" placeholder="비밀번호를 입력해주세요."/></div>
	<input id="loginbtn" type="button" value="확인"/>
	<div id="divsignup">
	<input id="signupbtn" type="button" value="회원가입"/>
	<input id="findidbtn" type="button" value="아이디 찾기"/>
	<input id="findpasswordbtn" type="button" value="비밀번호 찾기"/>
	</div>
</form>
</body>
</html>