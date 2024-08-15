import { FC } from "react";

interface Props {
  deps: {
    name: string;
    version: string;
  }[];
  title: string;
}

const DependencyTable: FC<Props> = ({ title, deps }) => {
  if (!deps.length) {
    return <h3>{title} not found</h3>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {deps.map((dep) => (
          <tr key={dep.name}>
            <td>{dep.name}</td>
            <td>{dep.version}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DependencyTable;
