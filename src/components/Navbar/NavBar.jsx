import React, { useContext } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, setFinalData } = useContext(UserContext);

  const handleLoginChange = () => {
    setIsLoggedIn(false);
    setFinalData([]);
    localStorage.clear();
  };

  // useEffect(() => {
  //   handleLoginChange;
  // }, [isLoggedIn]);

  return (
    <div className={styles.navbar__main}>
      <div className={styles.nav__sub}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.user__logins}>
          {!isLoggedIn ? (
            <>
              <span className={styles.login}>
                <Link to="/login">
                  <h3>Login</h3>
                </Link>
              </span>
              <span className={styles.signup}>
                <Link to="/signup">
                  <h3>Sign-Up</h3>
                </Link>
              </span>
            </>
          ) : (
            <>
              <span>
                <Link to="/" onClick={handleLoginChange}>
                  <h3 className={styles.logout}>LogOut</h3>
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
