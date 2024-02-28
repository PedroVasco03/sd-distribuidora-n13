import apiConfig from './apiConfig'

async function getById(route, id){
  const response = await apiConfig.get(`/${route}/${id}`)
   return response
}

export default getById