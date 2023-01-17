/* const menubtn = document.getElementById("offCanvas")
const offcanvas= document.getElementById("offcanvas-div")

menubtn.addEventListener("click" , activator)

function activator(){
    offcanvas.style.width = offcanvas.style.width == 0 ? "50%" : 0;
}
*/






const form = document.getElementById('form');
const phone = document.getElementById('phone');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const phoneValue = phone.value.trim();
	const emailValue = email.value.trim();

    if(phoneValue=== '') {
		setErrorFor(phone, 'Phone No cannot be blank');
	} else if(!isPhone(phoneValue)){
		setErrorFor(phone , "Not a valid phone number")
	}
	
	else {
		setSuccessFor(phone);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
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
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function isPhone(num){
//	return  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(num)
return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(num)
}
