import axios from 'axios';

const KEY = 'AIzaSyC7Qzd9DsY3nt5uzsEArrrRoMs_3KAJ2KE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
