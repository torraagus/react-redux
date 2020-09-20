import styled from "styled-components";
import colors from "./colors";

const Wrapper = styled.div`
	display: flex;
	width: 70vw;
	padding-top: 1rem;
	background-color: ${colors.fourth};
	/* border: 1px solid ${colors.terciary}; */
	border-radius: 10px;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;
`;

const LoadingWrapper = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Header = styled.h1`
	color: ${colors.primary};
	font-weight: 500;
	letter-spacing: 5px;
`;

const Root = styled.div`
	font-family: "Roboto";
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export { Wrapper, LoadingWrapper, Root, Header };
