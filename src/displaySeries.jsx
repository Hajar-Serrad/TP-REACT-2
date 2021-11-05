import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import moment from 'moment';
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

const DisplaySeries =(props)=>{

  
       return(
        
           <div>
             <Typography gutterBottom   variant="button" color="HighlightText" >
            
            Series  </Typography>
                {props.series.map(serie => 
            <Card sx={{ m: 3 }}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" align="center" color="primary">
            {serie.full_name} 
            </Typography>
            <Typography gutterBottom variant="h6" component="div" align="center">
            FROM: {moment(serie.begin_at).format("DD/MM/YYYY h:mm a")} {serie.end_at?" TO: "+moment(serie.end_at).format("DD/MM/YYYY h:mm a"):""}  
            </Typography>
          </CardContent>
        </CardActionArea>
       {serie.winner_id? <Button variant="Button" >
      <Link to={{pathname:"/teams/"+serie.winner_id}}>Vainqueur</Link>
      </Button>:<br/>}
      </Card>
              )};
           </div>);
}

export default DisplaySeries;