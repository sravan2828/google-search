import React, { Component } from 'react';
import { StyledContainer, StyledLabel } from './ThemeSelectorStyles';

class ThemeSelector extends Component {
	handleChange = e => {
		const theme = e.target.checked ? 'dark' : 'light';
		this.props.onSelect(theme);
	};

	render() {
		const { active } = this.props;
		return (
			<StyledContainer>
				<StyledLabel htmlFor="theme-selector">Dark Mode</StyledLabel>
				<input
					id="theme-selector"
					type="checkbox"
					defaultChecked={active === 'dark'}
					onChange={this.handleChange}
				/>
			</StyledContainer>
		);
	}
}

export default ThemeSelector;
