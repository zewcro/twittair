import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

import "../Styles/SignUp.css";

const SignUpPage = () => {

  const removeCookie = () => {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    document.cookie = "profil_pic=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    console.log("cookie deleted");
  };

  useEffect(() => {
    removeCookie();
  });

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const newuser = {
        username: data.username,
        email: data.email,
        password: data.password,
        liked_twits: [""],
        rt_twits: [""],
        user_posts: [""],
      };

      axios
        .post("http://127.0.0.1:5002/new_user", newuser)
        .then((response) => (element.innerHTML = response.data.id))
        .catch((error) => {
          element.parentElement.innerHTML = `Error: ${error.message}`;
          console.error("There was an error!", error);
        });
      reset();
      window.location.href = "/login";
    } else {
      alert("Password do not matchs");
    }
  };

  console.log(watch("username"));
  console.log(watch("email"));
  console.log(watch("password"));
  console.log(watch("confirmPassword"));

  return (
    <div className="container">
      <div className="form">
        <h1>Sign Up Page </h1>
        <form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              {...register("username", { required: true, maxLength: 25 })}
            />
            <br />
            {errors.username && (
              <span style={{ color: "red" }}>Username is required</span>
            )}
            {errors.username?.type === "maxLength" && (
              <span style={{ color: "red" }}>Max characters should be 25</span>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              {...register("email", { required: true, maxLength: 80 })}
            />
            <br />
            {errors.email && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
            <br></br>
            {errors.email?.type === "maxLength" && (
              <span style={{ color: "red" }}>Max characters should be 80</span>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              {...register("password", { required: true, minLength: 4 })}
            />
            <br />
            {errors.password && (
              <span style={{ color: "red" }}>Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span style={{ color: "red" }}>
                {" "}
                - Min characters should be 4
              </span>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              {...register("confirmPassword", { required: true, minLength: 4 })}
            />
            <br />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>
                Confirm the password is required
              </span>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <span style={{ color: "red" }}>
                {" "}
                - Min characters should be 4
              </span>
            )}
          </Form.Group>
          <br />
          <Form.Group>
            <Button
              as="sub"
              variant="primary"
              onClick={handleSubmit(submitForm)}
            >
              SignUp
            </Button>
          </Form.Group>
          <Form.Group>
            <small>
              Already have an account ? <a href="/login">Log in</a>{" "}
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
