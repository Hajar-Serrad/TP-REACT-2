import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import DisplayVideogame from "./displayVideogame";
import DisplayPlayers from "./displayPlayers";

class DisplayTeamDetail extends Component {

  state={

    team:{},
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',

      }
    },
    videogame:{},
    players:[],
  };
componentDidMount= () => {
    fetch(process.env.REACT_APP_CLE_API_TEAMS+'/'+this.props.match.params.teamId,this.state.options)
    .then(response =>  response.json())
    .then(res => this.setState({team:res,videogame:res.current_videogame,players:res.players})) 
    .catch(err => console.error(err));
}
 
     render(){ 
       return(
        <Grid container justifyContent="center" mt={5}>
        <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            image={this.state.team.image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="HighlightText"> 
            {this.state.team.name}
            </Typography><br/><br/>
            <DisplayVideogame game={this.state.videogame} />
            <DisplayPlayers players={this.state.players}/>
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
       )} 
}

export default DisplayTeamDetail;