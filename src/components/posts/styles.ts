import styled from "styled-components";
import colors from "../../colors";
import St from "../shared/styles";

interface IWrapper {
	selected: boolean;
}

interface IContainer {
	vertical?: boolean;
}

// export const Container = styled.div<IContainer>`
// 	display: flex;
// 	flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
// 	width: 50vw;
// 	overflow-x: auto;
// 	padding: 0.5rem;
// 	margin: 0.5rem 0 1rem 0;
// 	text-align: left;
// `;

const Id = styled.p`
	font-weight: bold;
	background-color: ${colors.primary};
	padding: 1rem;
	margin: 0;
	color: white;
	border-radius: 45px 45px 0 0;
`;

const Title = styled.p`
	letter-spacing: 3px;
	font-weight: bold;
`;

const PostsWrapper = styled.div`
	width: 60%;
`;
const SelectedPostWrapper = styled.div`
	width: 40%;
`;

const Wrapper = styled.div<IWrapper>`
	padding: 1rem 1rem 0 1rem;
	height: fit-content;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	text-align: left;
	background-color: white;
	border: 1px solid ${colors.primary};
	font-weight: 300;

	/* -webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27; */

	${({ selected }) =>
		!selected
			? `
		:hover {
			cursor: pointer;
			opacity: 75%;

    	:active {
			opacity: 50%;
		}
	}`
			: `& {
			background-color: ${colors.primary};
			color: white;
		}`}
`;

export default { Wrapper, Id, Title, PostsWrapper, SelectedPostWrapper, ...St };
