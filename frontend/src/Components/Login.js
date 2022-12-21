import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Styles/SignUp.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () =>{
    console.log(username);
    console.log(password);

    setUsername('');
    setPassword('');
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
            <Button as="sub" variant="primary" onClick={loginUser}>
              SignUp
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
