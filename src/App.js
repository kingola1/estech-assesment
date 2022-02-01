import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import './App.css';

import { getGames } from './api';

import './components/GameLists';

const App = () => {

  const [Games, setGames] = useState([]);

  useEffect(() => {
    getGames()
      .then((data) => {
        console.log(data);

        setGames(data);
      })
  }, []);



    return (
        <h1>App</h1>
    );
}

export default App;
