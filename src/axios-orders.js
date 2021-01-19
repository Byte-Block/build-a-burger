import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8fae0-default-rtdb.firebaseio.com/'
});

export default instance;