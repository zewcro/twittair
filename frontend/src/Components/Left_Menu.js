import React from "react";

import "../Styles/LeftMenu.css";

function LeftMenu() {
  return (
    <div className="MainContainer">
      <div className="section">
        <div className="section_explorer">
          <h2> Explorer </h2>
        </div>

        <div className="section">
          <div className="section_notifications">
            <h2> Notifications </h2>
          </div>
        </div>

        <div className="section">
          <div className="section_messages">
            <h2> Messages </h2>
          </div>
        </div>
        <div className="section">
          <div className="section_signets">
            <h2> Signets</h2>
          </div>
        </div>

        <div className="section">
          <div className="section_listes">
            <h2> Listes</h2>
          </div>
        </div>

        <div className="section">
          <div className="section_Profil">
            <h2> Profil </h2>
          </div>
        </div>

        <div className="section">
          <div className="section_plus">
            <h2> Plus </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
