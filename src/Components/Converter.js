import * as React from 'react';
import axios from "axios";
import cfg from '../config.json';
import i18n from '../i18n/en/Converter.json';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ScaleIcon from '@mui/icons-material/Scale';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}

	componentDidMount() {
		console.log('show converter');
		if (this.state.categories.length==0) {
			this.loadConverterCategories();
		}
	}

	render() {
		return ( <Box className="Converter">
				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<FormControl fullWidth>
								<InputLabel id="ConverterKategorieLabel">Category</InputLabel>
								<Select labelId="ConverterKategorieLabel" id="ConverterKategorie" label="Category">
									{ this.state.categories.map((c) => ( <MenuItem value={c}>{this.catName(c)}</MenuItem> )) }
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

				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							<Button variant="contained" startIcon={<ScaleIcon />}>Convert</Button>
						</Grid>
					</Grid>
				</Container>
			</Box> );
	}

	loadConverterCategories() {
		console.log('load converter categories from '+cfg.SERVER_URL+'physics/units/categories');
		axios.get(cfg.SERVER_URL+'physics/units/categories')
			.then((response) => {
				console.log('response', response);
				let a = response.data;
				if (a && a.success) {
					this.setState({categories: a.data.categories});
					console.log('state', this.state);
				} else {
					console.log('Fail: '+a.message);
				}
			});
	}

	catName(c) {
		if (i18n && i18n.categories && i18n.categories[c]) {
			return i18n.categories[c];
		}
		return c;
	}
}

export default Converter;