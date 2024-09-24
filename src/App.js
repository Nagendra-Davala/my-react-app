import React from "react";
import DDM from "./DDM";
import styles from "./Entity.module.css";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <>
      <div className={styles.div}>
        <br></br>
        <img
          src="https://docs.hexagonppm.com/portal-asset/Hexagon-Logo-White-Text"
          alt=""
        ></img>
        <div>
          <h3 className={styles.span}>Smart Engineering Manager</h3>
        </div>
        <br></br>
      </div>
      <br></br>
      <div>
        <Marquee
          style={{ color: "red", fontSize: "10px" }}
          behavior="scroll"
          direction="left"
          pauseOnHover={true}
        >
          **As token genration is not available in this solution, Please replace
          new SEM Web API token in DDM file and re-run.Make sure SEM Web API
          running and change Sem Web API url in the Entity.js file.**
        </Marquee>
      </div>
      <div>
        <DDM></DDM>
      </div>
    </>
  );
}
export default App;
