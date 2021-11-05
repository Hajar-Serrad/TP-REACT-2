import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DisplayPlayers =(props)=>{

  
       return(
        
           <div>
            <Typography gutterBottom   variant="button" color="HighlightText" >
            Players   </Typography>
               {props.players.map(player => 
            <Card sx={{ m: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" color="primary">
            {player.name} 
            </Typography>

          </CardContent>
        </CardActionArea> 
       </Card>
              )};
           </div>);
}

export default DisplayPlayers;