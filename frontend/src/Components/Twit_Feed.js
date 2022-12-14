import React, { useRef, useState, Component, useEffect } from "react";
import OneTwit from "./One_Twit";

export default class Home extends React.Component {
  state = {
    loading: true,
    posts: null,
  };

  async componentDidMount() {
    const url = "http://localhost:5001/posts";
    const response = await fetch(url);
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
               id = {post.post_id}
               author = {post.post_author}
               content = {post.post_content}
               like = {post.nb_like}
               rt = {post.nb_rt}
               publication = {post.published_date}
              />
              <br />
              <br />
            </div>
          ))}
      </div>
    );
  }
}
