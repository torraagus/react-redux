import styled from "styled-components";
import colors from "../../colors";
import Sh from "../shared/styles";

const Wrapper = styled.div`
	border-bottom: 1px solid ${colors.primary};
	padding: 1rem;
`;

const Email = styled.small`
	color: ${colors.primary};
`;

export default { Wrapper, Email, ...Sh };
