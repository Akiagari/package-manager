import React, { useState } from 'react';

type Dependency = {
  name: string;
  version: string;
};

const App: React.FC = () => {
  const [dependencies, setDependencies] = useState<Dependency[]>([]);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target?.result as string;
//         const parsedJson = JSON.parse(content);
//         const deps = Object.entries(parsedJson.dependencies || {}).map(
//           ([name, version]) => ({ name, version })
//         );
//         setDependencies(deps);
//       };
//       reader.readAsText(file);
//     }
//   };

  return (
    <div>
      <h1>Package JSON Viewer</h1>
      <table>
        <thead>
          <tr>
            <th>Dependency</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {dependencies.map((dep) => (
            <tr key={dep.name}>
              <td>{dep.name}</td>
              <td>{dep.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
