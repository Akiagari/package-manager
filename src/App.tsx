import React, { useCallback, useState } from "react";
import getRepoPackageJSON from "./api/getGIthubPackages";
import { parseGitHubUrl } from "./api/utils";
import DependencyTable from "./DependencyTable";

type Dependency = {
  name: string;
  version: string;
};

const App: React.FC = () => {
  const [dependencies, setDependencies] = useState<Dependency[]>([]);
  const [devDependencies, setDevDependencies] = useState<Dependency[]>([]);
  const [url, setUrl] = useState<string>("");
  const [err, setErr] = useState<Error | null>(null)

  const getDeps = useCallback(() => {

    try {
        const { owner, repository } = parseGitHubUrl(url) || {};
  
        if (!owner || !repository) {
          return;
        }
    
        getRepoPackageJSON({
          userName: owner,
          repoName: repository,
        }).then((res) => {
          console.log(atob(res.content));
    
          const parsedContent = JSON.parse(atob(res.content));
    
          const {
            dependencies: dependenciesRes,
            devDependencies: devDependenciesRes,
          } = parsedContent;
    
          if (dependenciesRes) {
            setDependencies(
              Object.entries(dependenciesRes as Record<string, string>).map(
                ([name, version]) => ({ name, version })
              )
            );
          }
    
          if (devDependenciesRes) {
            setDevDependencies(
              Object.entries(devDependenciesRes as Record<string, string>).map(
                ([name, version]) => ({ name, version })
              )
            );
          }
        });

        setErr(null)
    } catch(e) {
        setErr(e as Error)
    }
  
  }, [url]);

  if(err) {
    return (
        <div>{err.message}</div>
   
    )
  }
  return (
    <div>
      <h1>Package JSON Viewer</h1>
      <h2>Let`s type github url</h2>
      <div>{url}</div>
      <input type="text" onChange={(e) => setUrl(e.target.value)} />
      <button onClick={getDeps}>Get Deps</button>
      <DependencyTable title="Dependensies" deps={dependencies} />
      <DependencyTable title="Dev Dependensies" deps={devDependencies} />
    </div>
  );
};

export default App;
