
// init github
const github = new Github;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener

searchUser.addEventListener('keyup', e => {
	const userText = e.target.value;
	if (userText !== '') {
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					//show pretty alert;
					alert('user not found');
				} else {
					//show profile.
				}
			});
	} else {
		//clear the profile. 
	}
})