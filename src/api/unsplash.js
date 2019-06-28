import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cc780cc1bf95fdb1d4276c7922a565c8bd1ebdaf2ac4d738bec9ee11de126b12'
    }
});
