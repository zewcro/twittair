import React, { useState } from 'react';

import axios from "axios";

const LikeButton = ({ id, author,author_profil_pic, content, like, rt, publication, children}) => {
  const [likes, setLikes] = useState(like);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(like + 0);
    } else {
      setLikes(like + 1);
    }
    setIsClicked(!isClicked);
  };


  const pushNewLikes = () => {

    const newLikes = like;
    const url = "http://127.0.0.1:5001/like/" + id;
    // post request with axios to pass in param the new number of likes
    console.log(url);
    console.log(likes);
    axios
      .put(url, {
        nb_like: newLikes
      })
      .then((response) => console.log(response.status))
      .catch((err) => console.warn(err));
  }

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={() => {
      handleClick();
      pushNewLikes();
    }}>
      <span className="likes-counter"> {likes}</span>
    </button>
  );
};

export default LikeButton;