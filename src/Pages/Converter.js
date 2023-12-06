import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../Components/Layout';
import Box from '@mui/material/Box';
import Calc from '../Components/Converter.js';

class Converter extends React.Component {
	render() {
		return ( <Layout title="Converter">
			<Box component="main" className="Content">
				<Typography paragraph>
					⏱ Convert any physical quantity to another units system.
				</Typography>

				<Calc />
			</Box>
		</Layout> );
	}
}

export default Converter;