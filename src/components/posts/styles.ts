import styled from "styled-components";
import colors from "../../colors";

interface IWrapper {
	selected: boolean;
	disabled: boolean | undefined;
}

interface IContainer {
	vertical?: boolean;
}

export const Container = styled.div<IContainer>`
	display: flex;
	flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
	width: 50vw;
	overflow-x: auto;
	padding: 0.5rem;
	margin: 0.5rem 0 1rem 0;
`;

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

const Body = styled.p``;

const Wrapper = styled.div<IWrapper>`
	padding: 1rem 1rem 0 1rem;
	min-width: 50%;
	height: fit-content;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	text-align: left;
	border: 1px solid ${colors.primary};
	margin-left: 1.25rem;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:nth-child(1) {
		margin: 0;
	}

	${({ disabled }) =>
		!disabled &&
		`
		:hover {
			cursor: pointer;
			opacity: 75%;

		& ${Id} {
			border: 1px solid white;
			border-bottom: none;
    	}
    
    	active {
			opacity: 90%;
		}
	}`}

	${({ selected }) =>
		selected &&
		`& {
			background-color: ${colors.primary};
			color: white;
		}`}
`;

const Heading = styled.p`
	letter-spacing: 3px;
	font-weight: bold;
`;

const NoPost = styled.p``;

const Error = styled.p`
	color: ${colors.error};
`;

export default { Wrapper, Id, Title, Body, Heading, NoPost, Error };
