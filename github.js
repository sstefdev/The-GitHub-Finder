class GitHub {
  constructor() {
    this.client_id = "19c9f91045ce841c0071";
    this.client_secret = "af46bb963b53d4cf624bedf58807c2b181e78c02";
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
