function accountSubmit(){
 var userName = document.getElementById("userValue").value;
 var password = document.getElementById("passwordValue").value;
 var confirmPassword = document.getElementById("confPasswordValue").value;
 if(userName == "" || password == "" || confirmPassword == ""){
	alert(" Please enter Details");
 }else if(password != confirmPassword){
	alert(" Password and Confirm Password should Match");
 }else{
	alert("Account Created Successfully");
	document.getElementById("confPasswordValue").value = "";
	document.getElementById("userValue").value = "";
	document.getElementById("passwordValue").value = "";
  }
};
