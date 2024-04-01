import api from "./api";

const ENDPOINT = '/history'

export const getAll = async (token) => {
  try {
    const { data } = await api.get(ENDPOINT, { headers: { 'Authorization': token } });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getByClientId = async (clientId, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${clientId}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default {
  getAll,
  getByClientId
}