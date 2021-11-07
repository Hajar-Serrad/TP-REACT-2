import React, { Component } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import List from '@mui/material/List';
import { Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import DisplayTeam from './displayTeam';


class Test extends Component {

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
        console.log("*********************");
        console.log(this.props);
this.props.slug && fetch(process.env.REACT_APP_CLE_API_VIDEOGAMES+'/'+this.props.slug+'/teams?sort=&page=1&per_page=50', this.state.options)
        .then(response =>  response.json())
        .then(response => this.setState({teams:response}))
        .catch(err => console.error(err));
        this.props.slug && fetch(process.env.REACT_APP_CLE_API_VIDEOGAMES+'/'+this.props.slug+'/teams', this.state.options)
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
            Teams
             </Typography>
             <Typography variant="h4" component="h2">
             <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {this.props.slug && this.state.teams && this.state.teams.map(team => <DisplayTeam key={team.id} id={team.id} name={team.name} logo={team.image_url}/> )}
              </List>
              </Typography> <br/><br/> <br/> 
              <Pagination count={count} color="primary" page={this.state.currentPage} onChange={this.handleClick}/>
            </Container>
        )};
}

export default Test;