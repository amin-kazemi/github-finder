class Github {
  constructor(user){
    this.config = {
      headers: {
        Authorization: '26475c7061f01f8ee41f4bef34090519fe00b0ad'
      }
    }

    this.user = user;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }



  // Get user profile & repo
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`,this.config);

    const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,this.config)


    const profile = await profileResponse.json();
    const repo = await reposResponse.json();

    return {
      profile,
      repo
    } 
  }
}