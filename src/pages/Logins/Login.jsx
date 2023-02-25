import React, { useContext, useEffect } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Login = () => {
  //* Declare variables
  const { userData, setUserData, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  const navigate = useNavigate();

  //* Redirect, if already logged in !!
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/planner");
    } 
  }, []);

  //* Functions for handling
  let handleEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  let handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  let handleDataSubmit = (e) => {
    e.preventDefault();
    if (userData.email != "" && userData.password != "") {
      {
        userData.email ===
          (localStorage.getItem("Email") || "admin@gmail.com") && //Set login status to true is its either admin or already signed-up user.
        userData.password === (localStorage.getItem("Password") || "admin")
          ? setIsLoggedIn(true)
          : null;
      }
    }
  };

  //* If auth success, proceed

  if (isLoggedIn) {
    localStorage.setItem("isLogged", true);
    navigate("/planner");
  }

  return (
    <div className={styles.login__main}>
      <form className={styles.login_form} onSubmit={handleDataSubmit}>
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

        <div className={styles.submit}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
