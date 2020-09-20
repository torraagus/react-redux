import styled from "styled-components";
import colors from "../../colors";
import Sh from "../shared/styles";

const Wrapper = styled.div`
	border-bottom: 1px solid ${colors.primary};
	background-color: white;
	padding: 1rem;

	${Sh.Body} {
		font-weight: 300;
	}
`;

const Email = styled.small`
	color: ${colors.primary};
	font-weight: 500;
`;

export default { Wrapper, Email, ...Sh };
