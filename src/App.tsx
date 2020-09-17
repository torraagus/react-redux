import * as React from "react";
import "./styles.css";
import PostsContainer from "./components/posts/PostsContainer";
import SelectedPost from "./components/posts/SelectedPost";

const App = () => {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsContainer />
      <SelectedPost />
    </div>
  );
};

export default App;
