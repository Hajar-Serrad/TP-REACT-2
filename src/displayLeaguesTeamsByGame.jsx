import React from 'react';
import DisplayLeaguesByGame from './displayLeaguesByGame';
import DisplayTeamsByGame from './displayTeamsByGame';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const DisplayLeaguesTeamsByGame =(props)=>{
    const id=props.match.params.videogameId;
    
    return(
       
        <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
  <Card sx={{ m: 3 }}>
        <CardActionArea>
          <CardContent>
             <DisplayLeaguesByGame id={id}/>

          </CardContent>
        </CardActionArea> 
       </Card>
   
  </Grid>
  
  <Grid item xs={8}>
  <Card sx={{ m: 3 }}>
        <CardActionArea>
          <CardContent>
   <DisplayTeamsByGame id={id}/>
          </CardContent>
        </CardActionArea> 
       </Card>
  </Grid>
</Grid>
    );
}

export default DisplayLeaguesTeamsByGame;
