import apiConfig from './apiConfig'

async function update(route,id, data){
   await apiConfig.patch(`/${route}/${id}`, data)
}

export default update