import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001"

const https = {
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    get: axios.get,
}

export default https