const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById("log-in")
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenum = document.getElementById('phonenum');
const npassword = document.getElementById('npassword');
const confirmation = document.getElementById('confirmation');
const submitBtn = document.getElementById("submit-btn");
const username = document.getElementById("username");
const password = document.getElementById("password"); 



signupForm.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


loginForm.addEventListener("submit" , (e)=>{
	e.preventDefault();
	checkLoginInputs();
})














function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phonenumValue = phonenum.value.trim();
	const npasswordValue = npassword.value;
	const confirmationValue = confirmation.value;
	

    if(firstnameValue === '') {
		setErrorFor(firstname, 'Firstname cannot be blank');
	} else if(!isName(firstnameValue)){
		setErrorFor(firstname , "Invalid name")
	}
	else {
		setSuccessFor(firstname);
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else if(!isName(firstnameValue)){
		setErrorFor(firstname , "Invalid name")
	}
	else {
		setSuccessFor(lastname);
	}

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}







    if(phonenumValue === '') {
		setErrorFor(phonenum, 'Phone number cannot be blank');
	} else if(!isPhone(phonenumValue)){
		setErrorFor(phonenum  ,"Invalid phone number!")
	}
	else{
		setSuccessFor(phonenum)
	}


    if(npasswordValue === '') {
		setErrorFor(npassword, 'Password cannot be blank');
	} else if(npassword.length < 6){
		setErrorFor(npassword , "Password cannot be less than 6 characters")
	} 
	else {
		setSuccessFor(npassword);
	}

    if(confirmationValue === '') {
		setErrorFor(confirmation, 'Password2 cannot be blank');
	} else if(npasswordValue !== confirmationValue) {
		setErrorFor(confirmation, 'Passwords does not match');
	} else{
		setSuccessFor(confirmation);
	}
}







function checkLoginInputs(){
	const usernameVal = username.value.trim();
	const passwordVal = password.value;



	// usename validation

	if (usernameVal === ""){
		setErrorFor(username , "username can't be blank")
	}else if(!isUserName(usernameVal)){
		setErrorFor(username , "username should consist a-z,  A-Z  ,numbers and underscore.")
	}
	else{
		setSuccessFor(username)
	}




	//password validation
    if(passwordVal === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordVal.length < 6){
		setErrorFor(password , "Password cannot be less than 6 characters")
	} 
	else {
		setSuccessFor(password);
	}

}










function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	






function isEmail(email) {
	return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function isPhone(num){
	return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(num)
}

function isName(name){
	return /^[A-Za-z]+$/.test(name)
}

	
function isUserName(username){
	return /^[a-zA-Z0-9\_]+$/.test(username)
}