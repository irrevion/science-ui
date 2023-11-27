import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './TopBar';

class Layout extends React.Component {
	render() {
		return (
			<Box>
				<TopBar title={this.props.title} />
				<Container maxWidth={false}>
					{this.props.children}
				</Container>
			</Box>
		);
	}
}

export default Layout;