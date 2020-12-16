/**
 * 
 */

window.onload = function(){
	var form = document.createElement('form');
	var header = document.createElement('header');
	var main_h1 = document.createElement('h1');
	var btn_div = document.createElement('div');
	var h1_text = document.createTextNode('My Web');
	
	
	
	
	
	
	form.setAttribute('name','headerform');
	main_h1.setAttribute('id','main_h1');
	main_h1.appendChild(h1_text);
	
	document.body.prepend(form);
	document.headerform.prepend(header);
	header.prepend(main_h1);
	main_h1.after(btn_div);
	
	
	
	for(var i=0; i<3; i++){
		var input_arr = [];
		input_arr[i]=document.createElement('input');
		btn_div.append(input_arr[i]);
		input_arr[i].setAttribute('type','button');
		input_arr[i].setAttribute('class','gobtn');
		
		//i가 0일때 id=aboutbtn,value=About
		//i가 1일때 id=historybtn,value=History
		//i가 2일때 id=servicebtn,value=Service
		/*input_arr[i].setAttribute('id','');
		input_arr[i].setAttribute('value','');*/
		switch(i){
			case 0 : input_arr[i].setAttribute('id','aboutbtn');
					 input_arr[i].setAttribute('value','About');break;
			case 1 : input_arr[i].setAttribute('id','historybtn');
					 input_arr[i].setAttribute('value','History');break;
			case 2 : input_arr[i].setAttribute('id','servicebtn');
					 input_arr[i].setAttribute('value','Service');break;
			default : break;
		}
	
	}
	
	
	/*var aboutbtn = document.getElementById('aboutbtn');
	var historybtn = document.getElementById('historybtn');
	var servicebtn = document.getElementById('servicebtn');
	
	aboutbtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="About";
		document.mainform.setAttribute('method','post');
		document.mainform.action = "/about.do";
		document.mainform.submit();
		
	}
	historybtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="History";
		document.mainform.setAttribute('method','post');
		document.mainform.action = "/history.do";
		document.mainform.submit();
	}
	servicebtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="Service";
		document.mainform.setAttribute('method','post');
		document.mainform.action = "/service.do";
		document.mainform.submit();
	}*/





}
var aboutbtn = function(){
	document.mainform.setAttribute('method','post');
	document.mainform.action = "/about.do";
	document.mainform.submit();
}
