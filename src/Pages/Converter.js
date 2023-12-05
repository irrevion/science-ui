import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../Components/Layout';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

class Converter extends React.Component {
	render() {
		return ( <Layout title="Converter">
			<Box component="main" className="Content">
				<Typography paragraph>
					Convert any physical quantity to another units system.
				</Typography>

				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							<Paper>Value</Paper>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper>Unit</Paper>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Layout> );
	}
}

export default Converter;