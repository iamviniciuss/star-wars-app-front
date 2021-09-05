import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

const options = {
    headers: {}
}

const Swapi = {
    listPeoples: async (limit:number = 10 , offset:number = 0)=>{
        return api.get(`/api/v1/peoples/?limit=${limit}&offset=${(offset * limit)}`, options )
    },
    getPeople: async (people_id:number = 0)=>{
        return api.get(`/api/v1/peoples/${people_id}`, options )
    }
}

export default Swapi;