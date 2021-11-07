import React, {Component} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DropDownVideoGames from './dropDownVideoGames';


class DisplayVideoGames extends Component {

    
      state={
        games: [
        
      ],
      options: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',
  
        }
      },
      };
      
    

    
    componentDidMount=()=>{
      fetch(process.env.REACT_APP_CLE_API_VIDEOGAMES+'?page=1&per_page=50', this.state.options)
        .then(response =>  response.json())
        .then(response => this.setState({games:response}))
        .catch(err => console.error(err));
    };
   
     
      render(){
        
        return(
          <DropDownVideoGames games={this.state.games} />
        )};
}

export default DisplayVideoGames;