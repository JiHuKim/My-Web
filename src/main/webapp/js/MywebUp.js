/**
 * 
 */


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
	
	
	
	for(var i=0; i<4; i++){
		var input_arr = [];
		input_arr[i]=document.createElement('input');
		btn_div.append(input_arr[i]);
		input_arr[i].setAttribute('type','button');
		input_arr[i].setAttribute('class','gobtn');
		
		switch(i){
			case 0 : input_arr[i].setAttribute('id','mainbtn');
					 input_arr[i].setAttribute('value','Main');break;
			case 1 : input_arr[i].setAttribute('id','aboutbtn');
					 input_arr[i].setAttribute('value','About');break;
			case 2 : input_arr[i].setAttribute('id','historybtn');
					 input_arr[i].setAttribute('value','History');break;
			case 3 : input_arr[i].setAttribute('id','servicebtn');
					 input_arr[i].setAttribute('value','Service');break;
			default : break;
		}
	
	}
	
	
	/*var aboutbtn = document.getElementById('aboutbtn');
	var historybtn = document.getElementById('historybtn');
	var servicebtn = document.getElementById('servicebtn');
	
	aboutbtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="About";
		document.headerform.setAttribute('method','post');
		document.headerform.action = "/about.do";
		document.headerform.submit();
		
	}
	historybtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="History";
		document.headerform.setAttribute('method','post');
		document.headerform.action = "/history.do";
		document.headerform.submit();
	}
	servicebtn.onclick = function(){
		document.getElementById('main_h1').innerHTML="Service";
		document.headerform.setAttribute('method','post');
		document.headerform.action = "/service.do";
		document.headerform.submit();
	}*/








