import api from "./api";

const ENDPOINT = '/user'

export const getAllStatus = async (userId, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${userId}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};