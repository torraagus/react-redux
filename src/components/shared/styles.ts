import styled from "styled-components";
import colors from "../../colors";

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
	text-align: left;
`;

const Body = styled.p``;

const Heading = styled.p`
	letter-spacing: 3px;
	font-weight: bold;
	color: ${colors.secondary};
`;

const Subheading = styled.p``;

const Error = styled.p`
	color: ${colors.error};
`;

export default { Body, Heading, Subheading, Error };
