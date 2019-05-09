import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burguer-7715a.firebaseio.com/'
});

export default instance;