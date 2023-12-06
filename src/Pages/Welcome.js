import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../Components/Layout';
import Box from '@mui/material/Box';

class Welcome extends React.Component {
	render() {
		return ( <Layout title="Welcome!">
			<Box component="main" className="Content">
				<Typography paragraph>
					Welcome! 👋
				</Typography>
				<Typography paragraph>
					This is a demo UI for 🌐 <a href="https://github.com/irrevion/science-api" target="_blank">irrevion/science API</a>. It demonstrates available calculations and conversions.
				</Typography>
			</Box>
		</Layout> );
	}
}

export default Welcome;