import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  
  const [creds, setCreds] = useState({username: "", password: ""});
  const handleChange = event => {
      setCreds({...creds, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post('http://localhost:5000/api/login', creds)
          .then(res => {
              console.log(res);
              localStorage.setItem('token', res.data.payload)
              props.history.push("/BubblePage");
          })
          .catch(err => console.group(err.response));
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      
       <form onSubmit={handleSubmit}>
          <input type="type"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={creds.username} />
          <input type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={creds.password} />
          <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
