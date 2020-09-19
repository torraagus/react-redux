import styled from "styled-components";
import colors from "../../colors";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IContainer {
	vertical?: boolean;
}

const Container = styled.div<IContainer>`
	display: flex;
	flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
	flex-wrap: wrap;
	padding: 0.5rem;
	margin: 0.5rem 0 1rem 0;
	text-align: left;
`;

const Body = styled.p``;

const Heading = styled.p`
	letter-spacing: 3px;
	font-weight: bold;
	color: ${colors.primary};
`;

const Subheading = styled.p``;

const Error = styled.p`
	color: ${colors.error};
`;

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
	color: ${colors.primary};
	font-size: 25px;

	animation: spin infinite 1s;
	@keyframes spin {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default { Body, Heading, Subheading, Error, Container, LoadingIcon };
