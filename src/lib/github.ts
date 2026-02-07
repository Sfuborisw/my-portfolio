export async function getGitHubStats(username: string) {
  // Call the GitHub RESTful API
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();

  return {
    public_repos: data.public_repos,
    followers: data.followers,
    // Note: To get total stars, you would usually need to fetch all repos and sum them up
    // But for a RESTful API demo, this User object is a great start
  };
}
