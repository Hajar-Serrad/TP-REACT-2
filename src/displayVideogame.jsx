import React from "react";
import Typography from '@mui/material/Typography';


const DisplayVideogame=(props)=>{
    
        
    return(

        <div>
            <Typography gutterBottom variant="button" color="HighlightText" >
            
            Game   </Typography>
            <Typography gutterBottom variant="h5"  align="center">
             {props.game.name}  </Typography>
        </div>
        
    );
}

export default DisplayVideogame;