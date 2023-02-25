import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./signup.module.css";
const SignUp = () => {
  const navigate = useNavigate();

  const {
    userData,
    setUserData,
    finalData,
    setFinalData,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(UserContext);

  /*
useEffect(() => {
    handleDataSubmit;
  }, []); 
*/

  //* Redirect, if already logged in !!
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/planner");
    }
  }, [isLoggedIn]);

  //* Functions for handling Data changes
  let handleUsernameChange = (e) => {
    setUserData({ ...userData, username: e.target.value });
  };

  let handleEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  let handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  let handleConfirmPass = (e) => {
    setUserData({ ...userData, confirmPassword: e.target.value });
  };

  //* SignUp button functionalities
  let handleDataSubmit = (e) => {
    e.preventDefault();

    {
      if (
        userData.email != "" &&
        userData.username != "" &&
        userData.password != "" &&
        userData.confirmPassword != "" &&
        userData.password === userData.confirmPassword
      ) {
        setFinalData([...finalData, userData]);
        localStorage.setItem("isLogged", true);
        setIsLoggedIn(true);
        
        //* Storing data in localStorage
        localStorage.setItem("UserName:-", userData.username);
        localStorage.setItem("Email", userData.email);
        localStorage.setItem("Password", userData.password);
        localStorage.setItem("Confirm Password", userData.confirmPassword);
        navigate("/planner");
      } else {
        navigate("/signup");
      }
    }

    setUserData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className={styles.signup__main}>
      <form className={styles.signup_form} onSubmit={handleDataSubmit}>
        <div className={styles.username}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            value={userData.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.confirm_password}>
          <label htmlFor="confirm_password">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={userData.confirmPassword}
            onChange={handleConfirmPass}
          />
        </div>
        <div className={styles.submit}>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
