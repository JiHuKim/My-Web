/**
 * 
 */


	var form = document.createElement('form');
	var header = document.createElement('header');
	var main_h1 = document.createElement('h1');
	var btn_div = document.createElement('div');
	var h1_text = document.createTextNode('My Web');
	var nav = document.createElement('nav');
	
	
	
	
	
	form.setAttribute('name','headerform');
	main_h1.setAttribute('id','main_h1');
	main_h1.appendChild(h1_text);
	
	document.body.prepend(form);
	document.headerform.prepend(header);
	header.prepend(main_h1);
	main_h1.after(btn_div);
	btn_div.setAttribute('id','btndiv');
	btn_div.prepend(nav);
	
	
	for(var i=0; i<5; i++){
		var input_arr = [];
		input_arr[i]=document.createElement('input');
		nav.append(input_arr[i]);
		input_arr[i].setAttribute('type','button');
		input_arr[i].setAttribute('class','gobtn');
		
		
		switch(i){
			case 0 : input_arr[i].setAttribute('id','menubtn');
					 input_arr[i].setAttribute('value','♠');break;
			case 1 : input_arr[i].setAttribute('id','mainbtn');
					 input_arr[i].setAttribute('value','Main');
					 input_arr[i].setAttribute('name','navbtn');break;
			case 2 : input_arr[i].setAttribute('id','aboutbtn');
					 input_arr[i].setAttribute('value','About');
					 input_arr[i].setAttribute('name','navbtn');break;
			case 3 : input_arr[i].setAttribute('id','historybtn');
					 input_arr[i].setAttribute('value','History');
					 input_arr[i].setAttribute('name','navbtn');break;
			case 4 : input_arr[i].setAttribute('id','servicebtn');
					 input_arr[i].setAttribute('value','Service');
					 input_arr[i].setAttribute('name','navbtn');break;
			default : break;
		}
	
	}








