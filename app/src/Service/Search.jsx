import api from "./api";

const ENDPOINT = '/search'

export const getAllSearchs = async (token) => {  
  try {
    const { data } = await api.get(
      ENDPOINT,
      {
        headers: { 'Authorization': token }
      }
    );

    // const jsonString = "{\"q01\": \"A entrevista é monitorada em prol da transparência e qualidade da informação.\", \"q02\": \"\"}";
    // const objeto = JSON.parse(jsonString);
    // console.log(objeto);

    return data[0];
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllSearchs
}