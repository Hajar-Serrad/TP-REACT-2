import React, { Component } from 'react';
import DisplayLeague from "./displayLeague";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import List from '@mui/material/List';
import { Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';


class DisplayLeagues extends Component {

    state={

      leagues:[
        
      ]/*[
      {
        'id':'1','name':'Circuito Good Game WP'},{'id':'2','name':'Esportal Truecaller Tournament'},{'id':'3','name':'META'},{'id':'4','name':'Wild Tour'},{'id':'5','name':'Copa del Sur'}]
    
    */,
    options:{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',

      }
    },
    currentPage: 1,
    LPerPage: 6,
    nbrL:0,

    };

    componentDidMount= () => {
        
        fetch('https://tp-react-2-6yahedvf3-hajar-2.vercel.app/api/leagues?sort=&page='+this.state.currentPage+'&per_page='+this.state.LPerPage, this.state.options)
        .then(response =>  response.json())
        .then(response => {console.log(response); this.setState({leagues:response});})
        .catch(err => console.error(err));

        fetch('https://tp-react-2-6yahedvf3-hajar-2.vercel.app/api/leagues', this.state.options)
        .then(response => { this.setState({nbrL:response.headers.get('X-Total')}); })
        .catch(err => console.error(err));

    } 

    handleClick=(event,value)=> {
      this.setState({
        currentPage: value

      });
      this.componentDidMount();
    }
     render() {
         const count=Math.ceil(this.state.nbrL / this.state.LPerPage);
        return(
            <Container maxWidth="xs">
            <Typography variant="h5">
             <h3>Leagues</h3>
             </Typography>
             <Typography variant="h4" component="h2">
             <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {this.state.leagues.map(league => <DisplayLeague key={league.id} id={league.id} name={league.name} logo={league.image_url}/>)}
              </List>
              </Typography> <br/><br/> <br/> 
              <Pagination count={count} color="primary" page={this.state.currentPage} onChange={this.handleClick}/>
            </Container>
        )};
}

export default DisplayLeagues;