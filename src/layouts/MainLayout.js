import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Main from './Main';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import { StyledContainer } from './MainLayoutStyles';

class MainLayout extends Component {
	state = {
		themeConfig: {
			dark: {
				primary: '#525050',
				secondary: '#fff'
			},
			light: {
				primary: '#fff',
				secondary: '#000'
			}
		},
		activeTheme: window.localStorage.getItem('theme') || 'light'
	};

	handleSelect = theme => {
		this.setState({ activeTheme: theme }, () => {
			window.localStorage.setItem('theme', theme);
		});
	};

	render() {
		const { children } = this.props;
		const theme = this.state.themeConfig[this.state.activeTheme];
		return (
			<ThemeProvider theme={theme}>
				<StyledContainer>
					<Header />
					<Main>{children}</Main>
					<ThemeSelector onSelect={this.handleSelect} active={this.state.activeTheme} />
				</StyledContainer>
			</ThemeProvider>
		);
	}
}

export default MainLayout;
