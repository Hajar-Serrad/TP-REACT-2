import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ArrowDropDown  as ArrowDropDownIcon, OpenInBrowserSharp  } from "@material-ui/icons";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import {Link} from "react-router-dom";

import Typography from '@mui/material/Typography';


export default function DropDownVideoGames(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${props.games[selectedIndex].name}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
   
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const link="/videogames/"+(props.games[selectedIndex] && props.games[selectedIndex].id)+"/LeaguesTeams";
  return (
    <Router>
    
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
     
      
       <Button onClick={handleClick}><Typography variant="h6" component="div" color="black" underline="none">
        {props.games[selectedIndex] && props.games[selectedIndex].name}
                   </Typography></Button>
      
        <Button
          size="large"
          color="inherit"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
     
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {props.games.map((game, index) => (
                    <MenuItem
                      key={game.id}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      <Link to={link} style={{ textDecoration: 'none' }}>
      <Typography variant="h6" component="div" color="black" >
                     {game.name}
                   </Typography>
       </Link> 
                      
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </Router>
  );
}
