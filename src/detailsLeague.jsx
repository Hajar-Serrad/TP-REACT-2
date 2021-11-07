import React, {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import DisplaySeries from "./displaySeries";
import DisplayVideogame from "./displayVideogame";

class DetailsLeague extends Component {

  state={

    league: {},
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',

      }
    },
    series:[],
    videogame:{},
  };

  componentDidMount= () => {
    fetch('https://tp-react-2.vercel.app/api/leagues/'+this.props.match.params.leagueId,this.state.options)
    .then(response =>  response.json())
    .then(res => this.setState({league:res,videogame:res.videogame,series:res.series}) )
    .catch(err => console.error(err));
  } 
        
     render(){ 

       return(
        <Grid container justifyContent="center" mt={5}>
            <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            image={this.state.league.image_url}
            alt="league's logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="HighlightText"> 
            {this.state.league.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Site de la league
            </Typography> <br/><br/>
            <DisplayVideogame game={this.state.videogame} />
            <DisplaySeries series={this.state.series} />
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
       );} 
}

export default DetailsLeague;