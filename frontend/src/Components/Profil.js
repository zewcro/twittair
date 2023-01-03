import React, {Component, useState, useEffect} from "react";
import axios from "axios";

import LeftMenu from "./Left_Menu";
import Right_Menu from "./Right_menu";
import TwitFeed from "./Twit_Feed";


import "../Styles/LeftMenu.css";
import "../Styles/Profil.css";

function Profil() {
  const [userData, setUserData] = useState('');

  const cookieObj = new URLSearchParams(
    document.cookie.replaceAll("&", "%26").replaceAll("; ", "&")
  );

  const connected_user = cookieObj.get("user");


  useEffect(() => {
    console.log(connected_user);
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
          <div className="credentials_container">
           <div className="user_name_informations">
            <br />
          <p className="username"><b>@{userData.username}</b></p>
          </div>
        </div>
        <div className="biography_container">
        <p className="biography_data">{userData.biography}</p>
          <p className="followers">followers : {userData.followers_count} | following : {userData.following_count}</p>
        
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
