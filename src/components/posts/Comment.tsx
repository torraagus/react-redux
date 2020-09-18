import React, { FC } from "react";
import { IComment } from "../../reducers/comment/interfaces";
import St, { Container } from "./styles";
import colors from "../../colors";

interface IProps {
	comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
	return (
		<div style={{ borderBottom: `1px solid ${colors.primary}`, paddingBottom: "1rem" }}>
			<p>{comment.body}</p>
			<small style={{ color: colors.primary }}>{comment.email}</small>
		</div>
	);
};

export default Comment;
