import React, { useRef, useState, Component, useEffect } from "react";
import OneTwit from "./One_Twit";

export default class TwitFeed extends React.Component {
  state = {
    loading: true,
    posts: null,
  };

  async componentDidMount() {
    const connected_user = document.cookie.split("=")[1];
    let curr_url = window.location.href;
    let url_to_fetch = "";

    if (curr_url == "http://localhost:3000/home") {
      url_to_fetch = "http://localhost:5001/posts";
    } else if (curr_url == "http://localhost:3000/profil") {
      url_to_fetch = "http://localhost:5001/posts/feed/" + connected_user;
      console.log(url_to_fetch);
    } else {
      alert("Impossible de charger les Twits ERR = 404");
      console.log("something wrong url = " + curr_url);
    }

    const response = await fetch(url_to_fetch);
    const data = await response.json();
    this.setState({ posts: data });
    console.log(this.state.posts);

  }
  render() {
    return (
      <div>
        <br />
        <br />
        {this.state.posts &&
          this.state.posts.map((post) => (
            <div>
              <OneTwit
                id={post.post_id}
                author={post.post_author}
                author_profil_pic = {post.author_profil_pic}
                content={post.post_content}
                like={post.nb_like}
                rt={post.nb_rt}
                publication={post.published_date}
              />
              <br />
              <br />
            </div>
          ))}
      </div>
    );
  }
}
