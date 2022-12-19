import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            <a href="/notifications">
              <h2> Notifications </h2>
            </a>
          </div>
        </div>

        <div className="section">
          <div className="section_messages">
            <a href="/messages">
              <h2> Messages </h2>
            </a>
          </div>

          <div className="section">
            <div className="section_Profil">
              <a href="/profil">
                <h2> Profil </h2>
              </a>
            </div>
          </div>

          <div className="section">
            <div className="section_plus">
              <a href="/plus">
                <h2> Plus </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
