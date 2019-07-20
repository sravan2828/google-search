import styled from 'styled-components';

export const StyledContainer = styled.div`
	height: 100%;
	background: ${props => props.theme.primary};
	color: ${props => props.theme.secondary};
`;
