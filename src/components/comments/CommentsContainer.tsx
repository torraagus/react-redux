import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/interfaces";
import Comment from "./Comment";
import Heading from "../heading/Heading";
import Loading from "../loading/Loading";
import FetchError from "../fetchError/FetchError";
import St, { Container } from "../shared/styles";

const Comments: FC = () => {
	const heading = "Comments";
	const { comments, error, loading } = useSelector((state: RootState) => state.commentReducer);

	if (loading) return <Loading stuff={"comments"} heading={heading} />;
	if (error) return <FetchError error={error} heading={heading} />;

	return (
		<>
			<Heading heading={heading} />
			{comments.length == 0 ? (
				<St.Subheading>No comments</St.Subheading>
			) : (
				<Container vertical>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</Container>
			)}
		</>
	);
};

export default Comments;
