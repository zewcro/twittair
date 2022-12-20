import React from "react";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";

import "../Styles/LeftMenu.css";

function Messages()  {
  return (
    <div className="row">
      <div className="column">
        <LeftMenu />
      </div>
      <div className="column">
        <h1>Messages</h1>
      </div>
      <div className="column">
        <Right_Menu />
      </div>
    </div>
  );
}

export default Messages;
