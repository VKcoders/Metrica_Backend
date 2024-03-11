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

    return data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getSearchById = async (id, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getSearchIntro = async (id, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/intro/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getSearchMain = async (id, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/question/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getAllSearchs,
  getSearchById
}