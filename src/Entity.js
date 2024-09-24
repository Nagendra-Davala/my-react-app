import React, { useState } from "react";
import RenderData from "./RenderData";
import styles from "./Entity.module.css";

function Entity(props) {
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isTableVisible, setTableVisible] = useState(false);

  function get() {
    fetch(
      "https://localhost:5001/sem/v4/Sites('LS')/Plants('LP')/Applications('Sppid')/" +
        props.entity,
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          setErrorMessage(
            response.url +
              "returned:" +
              response.status +
              ":" +
              response.statusText
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          setResponse(data);
        }
      })
      .catch((error) => {
        setErrorMessage(`Error: ${error.message}`);
        setResponse(null);
      });
  }

  function SetTableVisble() {
    isTableVisible ? setTableVisible(false) : setTableVisible(true);
  }
  return (
    <>
      <button className={styles.button} onClick={get}>
        {props.entity}
      </button>
      <button
        hidden={response == null}
        className={styles.ToggleButton}
        onClick={SetTableVisble}
      >
        {isTableVisible ? "Show " + props.entity : "Hide " + props.entity}
      </button>
      <RenderData
        data={response}
        entity={props.entity}
        errorMessage={errorMessage}
        showData={isTableVisible}
      />
      <div hidden={response == null}>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Entity;
