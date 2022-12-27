import React from "react";
import "../Styles/Home.css";

import TwitBox from "./Twit_Box";
import TwitFeed from "./Twit_Feed";
import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";


function Home() {
  
  const connected_user = document.cookie.split("=")[1];
  console.log("connected user is :" + connected_user);

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
