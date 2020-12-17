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

function goEvent(form,eventid,url){
	eventid.addEventListener('click',function(){
		form.action = url;
		form.method = "post";
		form.submit();	
	})
	
}