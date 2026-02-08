import { FixedSizeList as List } from "react-window";
import DataRow from "./DataRow";

const DataList = ({ data }) => {
  return (
    <div
      style={{
        marginTop: 20,
        height: 500,
        width: 400,
        border: "2px solid #333",
        background: "#fafafa"
      }}
    >
      <List
        height={500}
        itemCount={data.length}
        itemSize={40}
        width={400}
      >
        {({ index, style }) => (
          <div style={style}>
            <DataRow value={data[index]?.value} />
          </div>
        )}
      </List>
    </div>
  );
};

export default DataList;
