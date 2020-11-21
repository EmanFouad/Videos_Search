import axios from 'axios';

const KEY = 'AIzaSyBQp0tPQfBXyDE-BXCVYOq3oovdgqlqw0E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});