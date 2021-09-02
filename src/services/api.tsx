import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.94.0.1:3000'
    
});

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}

const Swapi = {
    listPeoples: async (limit:Number = 10 , offset:Number = 0)=>{
        return api.get(`/api/v1/peoples/?limit=${limit}&offset=${offset}`, options )
    },
    getPeople: async (people_id:Number = 0)=>{
        return api.get(`/api/v1/peoples/${people_id}`, options )
    }
}

export default Swapi;