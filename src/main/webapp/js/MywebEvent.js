/**
 * 
 */

function clickTextChange(eventid,targetid,val){
		eventid.addEventListener('click',function(){
			targetid.innerHTML=val;
		})
}

function textChange(id,val){
	id.innerHTML=val;
}

function goEvent(form,eventid,url,method){
	eventid.addEventListener('click',function(){
		form.action = url;
		if(method == "get"){
			form.method ="get";
		}else if(method == "post"){
			form.method = "post";	
		}else{
			console.log("goEvent method error")
		}
		form.submit();	
	})
	
}

function menuToggle(targetid,eventname){
	
	var media = window.matchMedia('(min-width: 661px)');
			
	media.addListener(function(){
		for(var i=0; i<eventname.length; i++){
			if(media.matches){
				eventname[i].style.display = "inline-block";
			}else{
				eventname[i].style.display = "none";
			}
		}
	})
		
	targetid.addEventListener('click',function(){
		for(var i=0; i<eventname.length; i++){
			if(eventname[i].style.display == "none" ){
				eventname[i].style.display = "inline-block";
			}else if(eventname[i].style.display == "inline-block"){
				eventname[i].style.display = "none"
			}else{
				eventname[i].style.display = "inline-block";
			}
		}
		
	})
	
}