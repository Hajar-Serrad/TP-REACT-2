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
import DropDownVideoGames from './dropDownVideoGames';


const DisplayVideoGames =()=> {

    
     const [games,setGames]=React.useState([
        
      ]);
      const [options,setOptions]=React.useState({
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer s9meduriHoDdn9OAY6YzwDFAxHgcwvJ8aG7Cc4fHNXUGzRmUoaM',
  
        }
      });
    

    
    React.useEffect(() => {
      fetch('https://tp-react-2-6yahedvf3-hajar-2.vercel.app/api/videogames?page=1&per_page=50', options)
        .then(response =>  response.json())
        .then(response => setGames(response))
        .catch(err => console.error(err));
    }, []);
   
     
      console.log(games);
        return(
          <DropDownVideoGames games={games} />
        );
}

export default DisplayVideoGames;