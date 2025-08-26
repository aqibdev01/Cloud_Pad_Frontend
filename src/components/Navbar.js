import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";
import themeContext from "../context/theme/themeContext";

const Navbar = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const contextAlert = useContext(alertContext);
  const { showAlert } = contextAlert;
  const contextTheme = useContext(themeContext);
  const { theme, setTheme, btnText, setBtnText } = contextTheme;
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    showAlert("Logout Successfull", "success");
  };
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setBtnText("Dark Theme");
      showAlert("Switched to Light Theme", "success");
    } else {
      setTheme("dark");
      setBtnText("Light Theme");
      showAlert("Switched to Dark Theme", "success");
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${theme}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/doc">
          <i className="fa-regular fa-cloud"></i>
          Cloud Pad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/about" ? " active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <div className="btn btn-primary" onClick={handleLogout}>
              Logout
            </div>
          )}
          <div className="btn btn-primary mx-2" onClick={handleTheme}>
            {btnText}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
