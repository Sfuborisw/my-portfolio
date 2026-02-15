// src/lib/github.ts

export async function getGitHubStats() {
  // 1. Directly specify your Repository path
  // Format is: https://api.github.com/repos/{owner}/{repo}
  const response = await fetch(
    "https://api.github.com/repos/Sfuborisw/my-portfolio",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repository data");
  }

  const data = await response.json();

  // 2. Format date (convert ISO string to format like Feb 06, 2026)
  const date = new Date(data.pushed_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return {
    lastPush: formattedDate,
    stars: data.stargazers_count, // Also get the star count for this repo
    forks: data.forks_count, // Also get the fork count
  };
}
