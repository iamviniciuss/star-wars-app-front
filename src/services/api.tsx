import axios from 'axios';

const api = axios.create({
    baseURL: ''
    
});

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}


const Swapi = {}
export default Swapi