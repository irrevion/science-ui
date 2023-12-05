import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import Interact from '../Contexts/Interact';

import '../App.css';


class Menu extends React.Component {
	static contextType = Interact;

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		this.context.set('openMenu', () => {this.setState({open: true});});
	}

	render() {
		let theme = createTheme();
		let fnCollapse = () => {
			this.setState({open: false});
		};
		let fnExpand = () => {
			this.setState({open: true});
		};

		return (
			<Interact.Provider value={{fnOpenMenu: fnExpand}}>
				<Drawer style={{ width: 320, flexShrink: 0 }} variant="persistent" anchor="left" open={ this.state.open } >
					<div style={{
							display: 'flex',
							alignItems: 'center',
							padding: theme.spacing(0, 1),
							...theme.mixins.toolbar,
							justifyContent: 'flex-end',
						}}>
						<IconButton onClick={ fnCollapse }>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem button key="Welcome">
							<ListItemIcon><HomeIcon /></ListItemIcon>
							<ListItemText>
								<Link to="/" className="MenuItem">Welcome</Link>
							</ListItemText>
						</ListItem>
						<ListItem button key="Converter">
							<ListItemIcon><SpeedIcon /></ListItemIcon>
							<ListItemText>
								<Link to="/Converter" className="MenuItem">Converter</Link>
							</ListItemText>
						</ListItem>
					</List>
				</Drawer>
			</Interact.Provider>
		);
	}
}

export default Menu;