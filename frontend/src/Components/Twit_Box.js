import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

import "../Styles/Twitbox.css";

import axios from "axios";

function TwitBox() {


  const connected_user = document.cookie.split("=")[2];
  console.log("connected user is :" + connected_user);

  const [message, setMessage] = useState("");
  const twit_content = useRef(null);


  const handleMessageChange = (event) => {
    // get the text area value
    setMessage(event.target.value);
  };

  function currDate() {
    return new Date().toLocaleString().replace(",", "");
  }

  const feedRefreshing = () => {
    setTimeout(() => {
      window.location.reload();
    }, 550);
  };

  
  const postTwit = (event) => {
    // content of the twit
    console.log(twit_content.current.value);
    const new_twit_content = twit_content.current.value;

    const url = "http://localhost:5001/new_twit";
    axios
      .post(url, {
        post_id: "",
        post_author: connected_user,
        post_content: new_twit_content,
        nb_like: 0,
        nb_rt: 0,
        published_date: currDate(),
      })
      .then((response) => console.log(response.status))
      .catch((err) => console.warn(err));
    // clean the twit box
    cleanBox();
    // refresh the feed to display latest posts
    feedRefreshing();
  };

  const cleanBox = () => {
    console.log("just cleaned the box!");
    // set the value to null to clear the box
    twit_content.current.value = "";
  };

  return (
    <div className="twitbox_container">
      <textarea
        className="twitbox_textarea"
        placeholder="Quoi de neuf ?"
        id="twit_box_content"
        onChange={handleMessageChange}
        ref={twit_content}
      ></textarea>
      <Button variant="primary" onClick={postTwit}>
        Publier
      </Button>
    </div>
  );
}

export default TwitBox;
