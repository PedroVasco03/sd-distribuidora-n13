import axios from 'axios'
const apiConfig = axios.create({
    baseURL:'http://localhost:5000',
})

export default apiConfig