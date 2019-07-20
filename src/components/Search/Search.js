import React from 'react';
import _ from 'lodash';
import { StyledContainer, StyledInput, StyledButton } from './SearchStyles';

function Search (props) {

	function handleChange (value){
		props.setText(value);
	}

	const debounceStateChange = React.useCallback(_.debounce(handleChange, 500),[]);
	return(
	<StyledContainer>
		<StyledInput type="text" placeholder="type here to search"  onChange={(e) => debounceStateChange(e.target.value)}/>
		<StyledButton>Search</StyledButton>
	</StyledContainer>
	);
}

export default Search;
