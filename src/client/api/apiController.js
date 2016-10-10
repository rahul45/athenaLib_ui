jQuery(document).ready(function($) {
	 $(function () {
                $('#datetimepicker4').datetimepicker();
      });
	$("#getAuthentication").click(function() {
			console.log("inside the submit fucntion");
			var is_valid=validateAuthenticationform();
			
			if(is_valid){
				var user ={userid:$("#userid_1").val(),password:$("#pass_1").val(),type:$
					('input:radio[name=user]:checked').val()};
				var data=getAuthentication(user);
				
			}
	});
	
});


function validateAuthenticationform(){
	var userid= $("#userid_1").val();
	var pass= $("#pass_1").val();
	var type = $('input:radio[name=user]:checked').val();
	if(userid == null || userid == undefined || userid == ''){
		alert("Username can't be blank !!");
		return false;
	}else if(pass== null || pass == undefined || pass == ''){
		alert("password can't be blank !!");
		return false;
	}else if(type == null || type == undefined || type == '' ){
		alert("select user type !!");
		return false;
	}
	return true;
}

function getAuthentication(user){
	var url_a='http://localhost:8090/athenaLib/athena/getsession';
	$.ajax({
		url: url_a,
    	type:'POST',
    	data: JSON.stringify(user),
    	dataType: 'json',
    	contentType: 'application/json',
		success : function(response) {
			alert( response );
			window.location.href = '/template/home.html';
		},
		error : function(xhr, status, error) {
			$("#outputText").html("Logged wrong");
		}
	});
}