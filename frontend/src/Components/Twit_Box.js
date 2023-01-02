import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

import "../Styles/Twitbox.css";

import axios from "axios";

function TwitBox() {
  let connected_user = document.cookie.split("=")[1];
  //console.log("connected user is :" + connected_user);

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

  const postTwit = (event, profil_pic) => {
    const cookieObj = new URLSearchParams(
      document.cookie.replaceAll("&", "%26").replaceAll("; ", "&")
    );
    const user_url_profil_pic = cookieObj.get("profil_pic");
    const new_twit_content = twit_content.current.value;
    const url = "http://localhost:5001/new_twit";

    let connected_user = cookieObj.get("user");

    axios
      .post(url, {
        author_profil_pic: user_url_profil_pic, // on enregistre le post avec comme url la valeur du cookie
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
    removeCookie();
  };

  const removeCookie = () => {
    document.cookie =
      "profil_pic=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    console.log("cookie deleted");
  };

  const cleanBox = () => {
    console.log("just cleaned the box!");
    // set the value to null to clear the box
    twit_content.current.value = "";
    removeCookie();
    // kill the cookie profil_pic
    // initialisiation du cookie avec une duree de vie de 10min
    // au clic du bouton on change la durée de vie pour time.now() + 1s
  };

  return (
    <div className="twitbox_container">
      <textarea
        className="twitbox_textarea"
        placeholder={"Quoi de neuf " + connected_user + " ?"}
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
