import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledLogo = styled.h1`
	font-size: 3rem;
	position: absolute;
	background: ${props => rgba(props.theme.primary, 0.6)};
	padding: 10px 20px;
	border-radius: 30px 3px;
	margin: 22px 50px;
	border: 1px solid ${props => props.theme.primary};
`;
export const StyledHeader = styled.header`
	display: flex;
	background: ${props => props.theme.primary};
	color: ${props => props.theme.secondary};
	height: 100px;
	overflow: hidden;
	border-bottom: 1px solid ${props => rgba(props.theme.primary, 0.5)};
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
	margin: 0 0 40px;
`;
