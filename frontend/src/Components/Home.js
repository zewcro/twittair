import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

import TwitBox from "./Twit_Box";
import TwitFeed from "./Twit_Feed";
import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";

function Home() {

  useEffect(() => {
    const cookieObj = new URLSearchParams(
      document.cookie.replaceAll("&", "%26").replaceAll("; ", "&")
    );
    const connected_user = cookieObj.get("user");
    console.log("connected user is :" + connected_user);

    const getUserProfilPic = () => {
      fetch("http://127.0.0.1:5003/user/getpic/" + connected_user)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
        })
        .then((data) => {
          const [{ profil_pic }] = data;
          console.log(profil_pic);
          // creating a cookie for the
          document.cookie = "profil_pic=" + profil_pic + ";expires=Wed, 05 Aug 2999 23:00:00 UTC";
        });
    };
    getUserProfilPic();
  });

  return (
    <div className="row">
      <div className="column">
        <LeftMenu />
      </div>
      <div className="column">
        <TwitBox />
        <TwitFeed />
      </div>
      <div className="column">
        <Right_Menu />
      </div>
    </div>
  );
}

export default Home;
