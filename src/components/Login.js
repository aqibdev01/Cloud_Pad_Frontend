import React, {useState} from "react";

function Login() {
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({email:"", password:""});
  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
//   const authToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMGQxYzIyMTEzNTA1MjQwZGUwZjU3In0sImlhdCI6MTc1NTM3MTg5Nn0.ibRbbxtoPjhc1-XpN9e6qEuxfRifo9A543ZOmGh0ofs";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/login`;
    const method = "POST";

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credentials.email, password:credentials.password}),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.authToken){
        localStorage.setItem("token", jsonResponse.authToken)
    }else{
        alert("Invalid Credentials")
    }
  };
  return (
    <form  onSubmit={handleSubmit}>
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
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" id="password" name="password">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
