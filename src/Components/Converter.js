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
import FormHelperText from '@mui/material/FormHelperText';
import ScaleIcon from '@mui/icons-material/Scale';

class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			categories_err: 0,
			category_selected: 0,
			units: [],
			unit_from_err: 0,
			unit_to_err: 0,
			unit_from_selected: 0,
			unit_to_selected: 0
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
							<FormControl fullWidth { ...(this.state.categories_err? {error: true}: {}) } >
								<InputLabel id="ConverterKategorieLabel">Category</InputLabel>
								<Select labelId="ConverterKategorieLabel" id="ConverterKategorie" label="Category" onChange={ (event) => {this.loadUnits(event);} } >
									{ this.state.categories.map((c) => ( <MenuItem value={c} key={ 'ConverterKategorie_'+c }>{this.catName(c)}</MenuItem> )) }
								</Select>
								{ (this.state.categories_err? ( <FormHelperText>{ this.state.categories_err }</FormHelperText> ): '') }
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
									{ this.state.units.map((u) => ( <MenuItem value={u} key={ 'ConverterMassenheitFrom_'+u }>{u}</MenuItem> )) }
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
									{ this.state.units.map((u) => ( <MenuItem value={u} key={ 'ConverterMassenheitTo_'+u }>{u}</MenuItem> )) }
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
		// reset state
		this.setState({
			categories: [],
			categories_err: 0
		});

		// retrieve data
		axios.get(cfg.SERVER_URL+'physics/units/categories')
			.then((response) => {
				let a = response.data;
				if (a && a.success) {
					this.setState({categories: a.data.categories});
				} else {
					console.log('Fail: '+a.message);
					this.setState({categories_err: a.message});
				}
			})
			.catch((err) => {
				console.log(err);
				this.setState({categories_err: 'Unable to load categories: '+err.message});
			});
	}

	catName(c) {
		if (i18n && i18n.categories && i18n.categories[c]) {
			return i18n.categories[c];
		}
		return c;
	}

	loadUnits(e) {
		console.log('load units for category '+e.target.value);
		let cat = e.target.value;

		// reset state
		this.setState({
			category_selected: cat,
			units: [],
			unit_from_err: 0,
			unit_to_err: 0
		});
		console.log(this.state);

		// retrieve data
		axios.get(cfg.SERVER_URL+'physics/units/category/'+cat)
			.then((response) => {
				let a = response.data;
				console.log('response', a);
				if (a && a.success) {
					this.setState({units: a.data.units});
					console.log(this.state.units, '=', a.data.units);
				} else {
					console.log('Fail: '+a.message);
					this.setState({
						unit_from_err: a.message,
						unit_to_err: a.message
					});
				}
				console.log(this.state);
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					unit_from_err: 'Unable to load units: '+err.message,
					unit_to_err: 'Unable to load units: '+err.message
				});
			});
	}
}

export default Converter;