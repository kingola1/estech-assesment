import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import axios from 'axios';

const api = axios.create({
    baseURL: `https://adaorachi.github.io/esetech-assessment-api/game-data.json`
  })
  
class App extends Component{
    
    constructor(){
        super();
        api.get('/').then (res => {
          console.log(res.data)
        })
      }

      render(){
          return (
            <Card sx={{ maxWidth: 345 }}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="140"
                     image="/static/images/cards/contemplative-reptile.jpg"
                     alt="green iguana"
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Lizards are a widespread group of squamate reptiles, with over 6,000
                       species, ranging across all continents except Antarctica
                     </Typography>
                   </CardContent>
                 </CardActionArea>
               </Card>
          );
      }
    
}


export default App;