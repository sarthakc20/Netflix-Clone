import axios from 'axios'; //promise based library for making requests

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance; //allows this to access outside
