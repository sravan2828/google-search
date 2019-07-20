import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledContainer = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	padding: 10px;
	background: ${props => rgba(props.theme.secondary, 0.3)};
	border-radius: 10px 0 0;
`;
export const StyledLabel = styled.label`cursor: pointer;`;
