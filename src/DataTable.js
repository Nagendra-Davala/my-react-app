import React from "react";

function DataTable({ currentItems }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          {currentItems &&
            currentItems.length > 0 &&
            Object.keys(currentItems[0]).map((key) => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>
                {value === null
                  ? "null"
                  : typeof value === "boolean"
                  ? value.toString()
                  : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
