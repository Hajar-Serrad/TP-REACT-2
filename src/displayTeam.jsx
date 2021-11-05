import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const DisplayTeam = (props) => {
const link="/teams/"+props.id;
  
    return(
      <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar alt="logo" src={props.logo}/>
        </ListItemAvatar>
        <ListItemText primary={props.name}  />
      </ListItem>
      <Button variant="text" >
      <Link to={link}>Details</Link>
      </Button>
      </div>
  
    );
}

export default DisplayTeam;


