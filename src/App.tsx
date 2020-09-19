import React, { useState, useEffect } from "react";
import "./styles.css";
import Posts from "./components/posts/PostsContainer";
import SelectedPost from "./components/posts/SelectedPost";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/interfaces";
import colors from "./colors";

const App = () => {
	const { progress, color } = useSelector((state: RootState) => state.loadingBarReducer);

	return (
		<div className="App">
			<LoadingBar color={color} progress={progress} />
			<h1 style={{ color: colors.primary }}>Posts</h1>
			<Posts />
			<SelectedPost />
		</div>
	);
};

export default App;
