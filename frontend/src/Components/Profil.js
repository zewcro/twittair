import React from "react";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";

import "../Styles/LeftMenu.css";

function Profil()  {

  const connected_user = document.cookie.split("=")[2];
  console.log("connected user is :" + connected_user);

  return (
    <div className="row">
      <div className="column">
        <LeftMenu />
      </div>
      <div className="column">
        <h1>Profil de '{connected_user}' </h1>
      </div>
      <div className="column">
        <Right_Menu />
      </div>
    </div>
  );
}

export default Profil;
