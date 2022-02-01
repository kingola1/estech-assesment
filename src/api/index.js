import axios from 'axios';

const URL = 'https://adaorachi.github.io/esetech-assessment-api/game-data.json';


export const getGames  = async () => {
    try {
        const { data: { data } } = await axios.get(URL);

        return data;
    } catch (error) {
        console.log(error);
    }
}