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
			console.log("method??")
		}
		form.submit();	
	})
	
}