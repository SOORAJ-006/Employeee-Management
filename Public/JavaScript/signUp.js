const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.getElementById('upButton').addEventListener('click' , ()=>{
	const username = document.getElementById('upUserName').value
	const email = document.getElementById('upEmail').value
	const password = document.getElementById('upPassword').value

	const registerData = {
		username,
		email,
		password
	}

	console.log('the object data is ' , registerData)
	createNewUser(registerData)
})

function createNewUser(data){
	fetch(`http://localhost:5001/users/register`,{
		method:"POST",
		headers:{
			'content-type' : 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(res => {
		console.log(res)
	})
}

function loginData() {
	const email = document.getElementById('inEmail').value
	const password = document.getElementById('inPassword').value

	const loginData = {
		email,
		password
	}

	sendLoginInfo(loginData)
}

function sendLoginInfo(loginData){
	fetch('http://localhost:5001/users/login', {
		method:"POST",
		headers:{
			'content-type' : 'application/json'
		},
		body: JSON.stringify(loginData)
	})
	.then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('token', data.accessToken);
                    window.location.href = '/home';
                } else {
                    alert('Login failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
}