import React, { Component } from 'react';
import axios from 'axios';


export class GameLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         games: [],
         errorMsg: ''
      }
    }

    componentDidMount() {
      axios.get('https://adaorachi.github.io/esetech-assessment-api/game-data.json')
      .then(response => {
          this.setState({games: response.data})
      })
      .catch(error => {
          this.setState({errorMsg: 'Loading please wait......'})
      })
    }
    
    
  render() {
    const { games, errorMsg } = this.state
    return (
        <div className='container' >
            List of Game

            {
                games.length ?
                games.map(games => <div className='card row' key={games.id}>
                    <div className='col-4'>

                    </div>
                    <div className='col-8'>
                        <div>{games.name}</div>
                        <div>{games.rating}</div>
                        <div>{games.first_release_date}</div>
                        <div>{games.summary}</div>
                    </div>
                    
                </div>) : 
                null
            }
            {
                errorMsg ? <div>{errorMsg}</div> : null
            }
        </div>
    );
  }
}

export default GameLists;
