import * as React from 'react';
//import Drawer from '@material-ui/core/Drawer';
import Drawer from '@mui/material/Drawer';
//import { useTheme } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
//import IconButton from '@material-ui/core/IconButton';
import IconButton from '@mui/material/IconButton';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import Divider from '@material-ui/core/Divider';
import Divider from '@mui/material/Divider';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
//import HomeIcon from '@material-ui/icons/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import Interact from '../Contexts/Interact';

class Menu extends React.Component {
	static contextType = Interact;

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		this.context.set('openMenu', () => {this.setState({open: true});})
	}

	render() {
		let theme = createTheme();
		let fnCollapse = () => {
			this.setState({open: false});
		};
		const fnExpand = () => {
			console.log('fnExpand');
			this.setState({open: true});
			console.log('fnExpand');
		};

		return (
			<Interact.Provider value={{fnOpenMenu: fnExpand}}>
				<Drawer style={{ width: 240, flexShrink: 0 }} variant="persistent" anchor="left" open={ this.state.open } >
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
							<ListItemText primary="Welcome" />
						</ListItem>
					</List>
				</Drawer>
			</Interact.Provider>
		);
	}
}

export default Menu;