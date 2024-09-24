import React, { useState } from "react";
import DataTable from "./DataTable";
import styles from "./Entity.module.css";

export default function RenderData({ data, errorMessage, showData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems;
  if (data == null) {
    return <p>{errorMessage}</p>;
  }
  currentItems = data.value.slice(indexOfFirstItem, indexOfLastItem);
  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.value.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={styles.center} hidden={showData}>
        <br></br>
        <DataTable currentItems={currentItems} />
        <div>
          <button
            className={styles.round}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &#8249;
          </button>
          <span style={{ margin: "0 10px" }}>
            Page {currentPage} of {Math.ceil(data.value.length / itemsPerPage)}
          </span>
          <button
            className={styles.round}
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(data.value.length / itemsPerPage)
            }
          >
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}
