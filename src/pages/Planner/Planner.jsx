import React, { useState, useEffect, useRef } from "react";
import styles from "./planner.module.css";
import expandMore from "../../assets/expand_more.svg";
import expandLess from "../../assets/expand_less.svg";
import PlannerDisplay from "../PlannerDisplay/PlannerDisplay";
const Planner = () => {
  const [dropDown, setDropDown] = useState(true);
  const [type, setType] = useState("Work");
  const [userInput, setUserInput] = useState("");
  const [finalUserInput, setFinalUserInput] = useState([]);
  const [finalType, setFinalType] = useState([]);
  const [finalDueDate, setFinalDueDate] = useState([]);
  const [dueDate, setdueDate] = useState("");
  const ref = useRef();

 

  useOnClickOutside(ref, () => setDropDown(true));
  //* Getting Today's Date
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  const today = year + "-" + month + "-" + day;

  //* Toggle states
  let handleDropDown = () => {
    if (dropDown === true) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  //* User Input Change
  let handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  //* Form Submit
  let handleSubmit = (e) => {
    e.preventDefault();
    setFinalUserInput([...finalUserInput, userInput]);
    setFinalType([...finalType, type]);
    setFinalDueDate([...finalDueDate, dueDate]);
    //! Why when we do localstorage here, it gives empty array on first click, then sets accurate data?

    // localStorage.setItem("userInput", finalUserInput);
    // localStorage.setItem("type", finalType);
    // localStorage.setItem("dueDate", finalDueDate);
    setUserInput("");
    setdueDate("");
    setType("Work");
  };

  //! On setting here, clears the localStorage on refresh

  // * DropDown li values clicked
  useEffect(() => {
    handleTypeClicked;
  }, [type, setType]);

  // * Type handle
  let handleTypeClicked = (e) => {
    setType(e.target.getAttribute("value")); //? For getting the li value
    setDropDown(true);
  };

  //* Due Date
  let handledueDate = (e) => {
    setdueDate(e.target.value);
  };

  //* Close on clicking outside
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  return (
    <>
      <div className={styles.planner__main} ref={ref}>
        <div className={styles.userInputType}>
          <button className={styles.dropdownBtn} onClick={handleDropDown}>
            {type.length > 0 ? type : "Work"}

            {!dropDown ? (
              <>
                <span className={styles.expandMore}>
                  <img src={expandLess} alt="Expand More" />
                </span>
              </>
            ) : (
              <>
                <span className={styles.expandLess}>
                  <img src={expandMore} alt="Expand Less" />
                </span>
              </>
            )}
          </button>

          {!dropDown ? (
            <div className={styles.dropdown} onClick={handleTypeClicked}>
              <li value="Work">Work</li>
              <li value="Home">Home</li>
              <li value="Travel">Travel</li>
              <li value="Misc">Misc</li>
            </div>
          ) : null}
        </div>

        <div className={styles.userInput}>
          <input
            type="text"
            placeholder="Your Work Here...."
            onChange={handleUserInputChange}
            value={userInput}
          />
        </div>
        <div className={styles.dueDate}>
          <input
            type="date"
            name="date"
            id="date"
            min={today}
            onChange={handledueDate}
          />
        </div>

        <button className={styles.submit_btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <PlannerDisplay
        userinput={finalUserInput}
        type={finalType}
        dueDate={finalDueDate}
      />
    </>
  );
};

export default Planner;
