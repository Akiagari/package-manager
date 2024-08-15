interface Input {
  userName: string;
  repoName: string;
  branch?: any;
  token?: string;
}

interface GitHubResponse {
    "type": string,
    "encoding": string,
    "size": number,
    "name": string,
    "path": string,
    "content": string,
    "sha": string,
    "url": string,
    "git_url": string,
    "html_url": string,
    "download_url": string,
    "_links": {
      "git": string,
      "self": string,
      "html": string
    }
  }

async function getRepoPackageJSON(
  { userName, repoName, token }: Input,
): Promise<GitHubResponse> {
 
  let url = `https://api.github.com/repos/${userName}/${repoName}/contents/package.json`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then(r => r.json());

  return response
}

export default getRepoPackageJSON
