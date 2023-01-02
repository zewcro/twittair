import React, { useState, useRef, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
 
import "../Styles/Login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const removeCookie = () => {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    document.cookie = "profil_pic=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    console.log('cookie deleted');
  }

  useEffect(() => {
    removeCookie();
  });

  async function submitLogging() {
    axios.post('http://127.0.0.1:5002/logging', {
      username: username,
      password: password
    }) 
     .then(res => {
      console.log(res.status);
      
      let status_code = res.status;
      console.log(username);
      console.log(password);
      document.cookie = 'user='+username;
      if (status_code == '200'){
        console.log('le status code vaut bien 200, donc vrai');
        window.location.href = '/home';
        // stock the username inside a cookie
      
      }
      else  {
        alert('Username or password incorrect');
        // do nothing
      }
    })
  }

  return (
    <div className="container">
      <div className="form">
        <h1>Login Page </h1>
        <form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              value={username}
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Button as="sub" variant="primary" onClick={submitLogging}>
              Login
            </Button>
          </Form.Group>
          <Form.Group>
            <small>Don't have an account ? <a href='/register'>Create one</a> </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}

export default Login;
