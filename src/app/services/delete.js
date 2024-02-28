import apiConfig from './apiConfig'

async function deleteUser(route, id){
   await apiConfig.delete(`/${route}/${id}`)
}

export default deleteUser