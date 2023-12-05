import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Interact from '../Contexts/Interact';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
		  <Interact.Consumer>{value => (
            <IconButton onClick={() => {value.openMenu();}} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
		  )}</Interact.Consumer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Irrevion Science UI / {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}