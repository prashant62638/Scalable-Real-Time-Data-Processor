import React from "react";
const DataRow = ({ value }) => {
  return (
    <div
      style={{
        padding: "8px",
        fontSize: "16px",
        background: "white"
      }}
    >
      {value}
    </div>
  );
};

export default React.memo(DataRow);
