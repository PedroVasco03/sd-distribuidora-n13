import apiConfig from './apiConfig'

async function post(route, data){
   await apiConfig.post(`/${route}`, data)
}

export default post