export function parseGitHubUrl(url: string): { owner: string; repository: string } | null {
    const regex = /https?:\/\/github\.com\/([^\/]+)\/([^\/]+)(?:\/|$)/;
  
    const match = url.match(regex);
  
    if (match && match.length >= 3) {
      const owner = match[1];
      const repository = match[2];
      return { owner, repository };
    }
  
    return null;
  }