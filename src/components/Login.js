import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";
import themeContext from "../context/theme/themeContext";

function Login() {
  const contextAlert = useContext(alertContext);
  const { showAlert } = contextAlert;
  
  const contextTheme = useContext(themeContext);
  const { theme } = contextTheme;
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/login`;
    const method = "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.success) {
      showAlert("Login Successfull", "success");
      localStorage.setItem("token", jsonResponse.authToken);
      navigate("/");
    } else {
      showAlert("Invalid Credentials", "danger");
      console.log("Failed", jsonResponse.error);
    }
  };
  return (
    <div class="mt-3" data-bs-theme={theme}>
      <h2>Login to continue using CloudPad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" id="email" name="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            id="password"
            name="password"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            required
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
