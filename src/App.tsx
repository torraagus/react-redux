import React, { useEffect } from "react";
import "./styles.css";
import Posts from "./components/posts/PostsContainer";
import SelectedPost from "./components/posts/SelectedPost";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers/interfaces";
import colors from "./colors";
import { Wrapper, LoadingWrapper } from "./app.styles";
import Loading from "./components/loading/Loading";

const App = () => {
	const { progress, color } = useSelector((state: RootState) => state.loadingBarReducer);
	const { loading } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	return (
		<div className="App">
			<LoadingBar color={color} progress={progress} />
			{loading ? (
				<LoadingWrapper>
					<Loading heading={"Loading posts..."} />
				</LoadingWrapper>
			) : (
				<>
					<h1 style={{ color: colors.primary }}>Posts</h1>
					<Wrapper>
						<Posts />
						<SelectedPost />
					</Wrapper>
				</>
			)}
		</div>
	);
};

export default App;
