import React, { useState } from "react";
import styles from "./App.module.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Login from "./pages/Logins/Login";
import SignUp from "./pages/Logins/SignUp";
import Home from "./pages/Home/Home";
import Planner from "./pages/Planner/Planner";
import { UserContext } from "./UserContext";
function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [finalData, setFinalData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLogged")
  );

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Router>
          <UserContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
              isLoggedIn,
              setIsLoggedIn,
            }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {isLoggedIn ? (
                <Route path="/planner" element={<Planner />} />
              ) : (
                <Route path="/planner" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </UserContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
