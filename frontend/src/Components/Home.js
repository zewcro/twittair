import React from "react";
import '../Styles/Home.css';


import TwitBox from "./Twit_Box";
import TwitFeed from "./Twit_Feed";
import LeftMenu from "./Left_Menu";

function Home() {


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
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
</div>
)
}


export default Home;