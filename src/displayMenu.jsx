import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {ChevronLeft as ChevronLeftIcon }from "@material-ui/icons";
import {ChevronRight as ChevronRightIcon  }from "@material-ui/icons";
import { Menu as MenuIcon } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DisplayLeagues from './displayLeagues';
import Error from './error';
import DetailsLeague from './detailsLeague';
import DisplayTeams from './displayTeams';
import Link from '@mui/material/Link';
import DisplayTeamDetail from './displayTeamDetail';
import ListItem from '@mui/material/ListItem';
import DisplayLeaguesTeamsByGame from './displayLeaguesTeamsByGame';
import ListItemText from '@mui/material/ListItemText';
import DisplayVideoGames from './displayVideoGames';


const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DisplayMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: '#20B2AA' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            A-Sport Démo UBO
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ background: '#20B2AA' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <List style={{ background: '#20B2AA' }}>
        <ListItem >
             
            <Link href="/leagues" underline="none">
              <ListItemText primary={
                     <Typography variant="h6" component="div" color="white">
                     LEAGUES
                   </Typography>
                 } />
            </Link>
            </ListItem>
        
            <Divider />
            <ListItem >
        <Link href="/teams" underline="none">
                 <ListItemText primary={
                     <Typography variant="h6" component="div" color="white">
                     TEAMS
                   </Typography>
                 } />
            </Link>
             
            </ListItem>
           
            <Divider />
        <ListItem >
               <DisplayVideoGames/>
             </ListItem>
        </List>
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
    <Router>
      <Switch>
      <Route exact path="/leagues">
        <DisplayLeagues/>
      </Route>  
      <Route exact path="/">
        <Redirect to="/leagues" />
      </Route>
      <Route exact path="/leagues/:leagueId" component={DetailsLeague}/>
      <Route exact path="/teams">
        <DisplayTeams/>
      </Route> 
      <Route exact path="/teams/:teamId" component={DisplayTeamDetail}/>
      <Route exact path="/videogames/:videgameId/LeaguesTeams" component={DisplayLeaguesTeamsByGame}/>
      <Route>
        <Error/>
      </Route>
      </Switch>  
    </Router>
    </Main>
    </Box>
    
  );
}