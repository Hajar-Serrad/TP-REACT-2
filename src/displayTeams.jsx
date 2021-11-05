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
import DisplayTeam from './displayTeam';


class DisplayTeams extends Component {

    state={

      teams:[],
      options:{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',
  
        }
      },
    currentPage: 1,
    LPerPage: 8,
    nbrL:0,

    };

    
    componentDidMount= () => {
        
        fetch('https://tp-react-2-6yahedvf3-hajar-2.vercel.app/api/teams?sort=&page='+this.state.currentPage+'&per_page='+this.state.LPerPage, this.state.options)
        .then(response =>  response.json())
        .then(response => {console.log(response); this.setState({teams:response});})
        .catch(err => console.error(err));

        fetch('https://tp-react-2-6yahedvf3-hajar-2.vercel.app/api/teams', this.state.options)
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
             <h3>Teams</h3>
             </Typography>
             <Typography variant="h4" component="h2">
             <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {this.state.teams.map(team => <DisplayTeam key={team.id} id={team.id} name={team.name} logo={team.image_url}/> )}
              </List>
              </Typography> <br/><br/> <br/> 
              <Pagination count={count} color="primary" page={this.state.currentPage} onChange={this.handleClick}/>
            </Container>
        )};
}

export default DisplayTeams;