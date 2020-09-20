import React, { useEffect } from "react";
import "./styles.scss";
import Posts from "./components/posts/PostsContainer";
import SelectedPost from "./components/posts/SelectedPost";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers/interfaces";
import { Wrapper, LoadingWrapper, Root, Header } from "./app.styles";
import Loading from "./components/loading/Loading";

const App = () => {
	const { progress, color } = useSelector((state: RootState) => state.loadingBarReducer);
	const { loading: loadingPosts } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	return (
		<Root>
			<LoadingBar color={color} progress={progress} />
			{loadingPosts ? (
				<LoadingWrapper>
					<Loading heading={"Loading posts..."} />
				</LoadingWrapper>
			) : (
				<>
					<Header>Posts</Header>
					<Wrapper>
						<Posts />
						<SelectedPost />
					</Wrapper>
				</>
			)}
		</Root>
	);
};

export default App;
