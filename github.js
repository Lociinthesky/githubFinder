class Github {
	constructor() {
		this.client_id = 'fdsaiofsdahreuiqoh';
		this.client_secret = 'jopfsdu98574302t489ewtherpger';
	}

	async getUser(user) {
		//we need both the username and also the repos (same URL += '/repos')
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		
		const profileData = await profileResponse.json();
		return { profile }
	}
}