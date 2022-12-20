import React from "react";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";

import "../Styles/LeftMenu.css";

function Profil()  {
  return (
    <div className="row">
      <div className="column">
        <LeftMenu />
      </div>
      <div className="column">
        <h1>Profil </h1>
      </div>
      <div className="column">
        <Right_Menu />
      </div>
    </div>
  );
}

export default Profil;
