import apiConfig from "./apiConfig";

async function getAll(route){
   const response = await apiConfig.get(`/${route}`)
   return response
}

export default getAll