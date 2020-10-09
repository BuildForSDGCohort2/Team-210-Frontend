import axios from 'axios';

export function getHistory(){
   return  axios.get('/json/history.json');
}