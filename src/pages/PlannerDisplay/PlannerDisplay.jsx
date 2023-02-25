import React, { useState } from "react";
import styles from "./plannerDisplay.module.css";
const PlannerDisplay = ({ userinput, type, dueDate }) => {
  //Append user's data
  // let userInputText = [];
  // let userInputType = [];
  // let userInputDueDate = [];

  // userInputText.push(localStorage.getItem("userInput"));
  // userInputType.push(localStorage.getItem("type"));
  // userInputDueDate.push(localStorage.getItem("dueDate"));
  // console.log(userinput);

  return (
    <div className={styles.main}>
      <div className={styles.plannerDisplay__main}>
        <div className={styles.typeHead}>Type of Plan</div>
        <div className={styles.PlanHead}>Your Plan...</div>
        <div className={styles.dueDateHead}>Due Date</div>
      </div>

      <div className={styles.dataDynamic}>
        <div className={styles.typeDynamic}>
          {userinput.map((data) => (
            <>
              <h3 className={styles.types}>{data}</h3>
            </>
          ))}
        </div>
        <div className={styles.PlanDynamic}>
          {type.map((data) => (
            <>
              <h3 className={styles.types}>{data}</h3>
            </>
          ))}
        </div>
        <div className={styles.dueDateDynamic}>
          {dueDate.map((data) => (
            <>
              <h3 className={styles.types}>{data}</h3>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannerDisplay;
