import React, {Component, useState, useEffect} from "react";
import axios from "axios";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";
import TwitFeed from "./Twit_Feed";


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
        <div className="container">
          <div className="banner_img_container">
          <img className="banner_img"src={userData.banner_img} alt="banner_img" />
          </div>
          <div className="profil_pic_container">
            <img className="profil_pic"src={userData.profil_pic} alt="profil_pic" />
          </div>
          <div className="user_name_informations">
          <h3 className="displayed_name">{userData.displayed_name}</h3>
          <p className="username">@{userData.username}</p>
        </div>
        <div className="biography_container">
        <p>{userData.biography}</p>
        </div>
        <div>
       </div>
      </div>
      </div>
      <div className="column">
        <Right_Menu />
      </div>
      <TwitFeed />
    </div>
  );
}

export default Profil;
