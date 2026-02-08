import DataList from "./DataList";
import { useDataStream } from "../hooks/useDataStream";

const Dashboard = () => {
  const { data, error } = useDataStream();

  return (
    <div>
      <h2>Real-Time Data Dashboard</h2>
      <p>Data length: {data.length}</p>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <DataList data={data} />
    </div>
  );
};

export default Dashboard;
