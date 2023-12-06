import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

class Converter extends React.Component {
	render() {
		return ( <Box className="Converter">
				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<FormControl fullWidth>
								<InputLabel id="ConverterKategorieLabel">Category</InputLabel>
								<Select labelId="ConverterKategorieLabel" id="ConverterKategorie" label="Category">
									<MenuItem value="m">Mass</MenuItem>
									<MenuItem value="l">Length</MenuItem>
									<MenuItem value="t">Time</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Container>

				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							{/*<Paper>Zifferblatt</Paper>*/}
							<TextField variant="outlined" inputProps={{className: "ConverterZifferblatt"}} className="ConverterZifferblatt" id="ConverterZifferblattFrom" label="Magnitude" defaultValue="0" fullWidth />
						</Grid>
						<Grid item xs={12} md={4}>
							{/*<Paper>Maßeinheit</Paper>*/}
							<FormControl fullWidth>
								<InputLabel id="ConverterMassenheitFromLabel">Units</InputLabel>
								<Select labelId="ConverterMassenheitFromLabel" id="ConverterMassenheitFrom" label="Units">
									<MenuItem value="kg">Kilogram</MenuItem>
									<MenuItem value="m">Meter</MenuItem>
									<MenuItem value="gb">GigaByte</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Container>

				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8}>
							{/*<Paper>Zifferblatt</Paper>*/}
							<TextField variant="outlined" inputProps={{className: "ConverterZifferblatt"}} className="ConverterZifferblatt" id="ConverterZifferblattTo" label="Conversion result" value="0" fullWidth disabled sx={{color: '#000'}} />
						</Grid>
						<Grid item xs={12} md={4}>
							{/*<Paper>Maßeinheit</Paper>*/}
							<FormControl fullWidth>
								<InputLabel id="ConverterMassenheitToLabel">Target unit</InputLabel>
								<Select labelId="ConverterMassenheitToLabel" id="ConverterMassenheitTo" label="Target unit">
									<MenuItem value="kg">Kilogram</MenuItem>
									<MenuItem value="m">Meter</MenuItem>
									<MenuItem value="gb">GigaByte</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Container>
			</Box> );
	}
}

export default Converter;