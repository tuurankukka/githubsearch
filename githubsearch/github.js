class Github {
    constructor(){
        this.client_id ='a55aa33da9f2509f9062';
        this.client_secret = '    084dc6ffd7e3abd54dd4dea943deb15c2f962217';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}