import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

import "../Styles/Twitbox.css";

function TwitBox() {
  const [message, setMessage] = useState("");
  const twit_content = useRef(null);

  const handleMessageChange = (event) => {
    // get the text area value
    setMessage(event.target.value);
  };

  const postTwit = (event) => {
    console.log(twit_content.current.value);
    // clean the twit box
    cleanBox();
    

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
