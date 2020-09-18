import * as React from "react";
import "./styles.css";
import Posts from "./components/posts/PostsContainer";
import SelectedPost from "./components/posts/SelectedPost";
import colors from "./colors";

const App = () => {
	return (
		<div className="App">
			<h1 style={{ color: colors.primary }}>Posts</h1>
			<Posts />
			<SelectedPost />
		</div>
	);
};

export default App;
