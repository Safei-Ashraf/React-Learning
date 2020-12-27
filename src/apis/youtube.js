import axios from 'axios';

const KEY = `AIzaSyBtctcZtOCyBMQ6KRBn-hgudaJJ4E0jkk8`;
const baseURL = `https://www.googleapis.com/youtube/v3`;

export default axios.create({
    baseURL: baseURL,
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})