import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

function Signup() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/createUser`;
    const method = "POST";
    const { name, email, password, confirmPassword } = credentials;

    if (password === confirmPassword) {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        showAlert("Signup Successfull", "success");
        localStorage.setItem("token", jsonResponse.authToken);
        navigate("/");
      } else {
        showAlert("Signup Failed", "danger");
        console.log("Failed", jsonResponse.error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label" id="name" name="name">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          name="name"
          required
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" id="email" name="email">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
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
          required
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="confirmPassword"
          className="form-label"
          id="confirmPassword"
          name="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          required
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Signup;
