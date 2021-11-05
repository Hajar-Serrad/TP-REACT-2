import React from 'react';
import DisplayLeaguesByGame from './displayLeaguesByGame';
import DisplayTeamsByGame from './displayTeamsByGame';
import { Grid } from '@mui/material';

const DisplayLeaguesTeamsByGame =(props)=>{
    const id=props.match.params.videgameId;
    return(
       /*
        <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <DisplayLeaguesByGame id={id}/>
  </Grid>
  
  <Grid item xs={8}>
   <DisplayTeamsByGame id={id}/>
  </Grid>
</Grid>
        */
<DisplayLeaguesByGame id={id}/>
    );
}

export default DisplayLeaguesTeamsByGame;
