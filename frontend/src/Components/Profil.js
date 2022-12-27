import React, {Component, useState, useEffect} from "react";
import axios from "axios";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";

import "../Styles/LeftMenu.css";
import "../Styles/Profil.css";

function Profil() {
  const [userData, setUserData] = useState('');

  const connected_user = document.cookie.split("=")[1];
  console.log("connected user is :" + connected_user);


  useEffect(() => {
    const url = "http://127.0.0.1:5002/user/" + connected_user;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setUserData(json);
        console.log(userData);
      } catch (error) {
        console.log("error", error);
      }
    };
    
    fetchData();
}, []);

  return (
    <div className="row">
      <div className="column">
        <LeftMenu />
      </div>
      <div className="column">
        <div className="card">
        <img src={userData.profil_pic} alt="profil_pic" />
        <h1>{userData.username}</h1>
        <p className="title">"{userData.displayedName}"</p>
        <p>Biography</p>
        <div>
       </div>
        <p><button>Edit</button></p>
      </div>
      </div>
      <div className="column">
        <Right_Menu />
      </div>
    </div>
  );
}

export default Profil;
