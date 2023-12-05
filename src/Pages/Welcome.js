import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../Components/Layout';

class Welcome extends React.Component {
	render() {
		return ( <Layout title="Welcome!">
			<Typography paragraph>
				Welcome!
			</Typography>
		</Layout> );
	}
}

export default Welcome;