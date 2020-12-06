class GitHub {
  constructor() {
    this.client_id = "19c9f91045ce841c0071";
    this.client_secret = "59e2fd5a46ac8494bdac126b6b382ea33e5cdecd";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
