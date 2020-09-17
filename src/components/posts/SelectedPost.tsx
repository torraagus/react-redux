import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/post/interfaces";
import Post from "./Post";
import St, { Container } from "./styles";

const SelectedPost: FC<any> = () => {
	const { selectedPost: post } = useSelector((state: RootState) => state.postReducer);

	return (
		<>
			<St.Heading>Selected post</St.Heading>
			{!post ? (
				<St.NoPost>No post selected</St.NoPost>
			) : (
				<>
					<Container>
						<Post disabled post={post} />
					</Container>
				</>
			)}
		</>
	);
};

export default SelectedPost;
