import api from "./api";

const ENDPOINT = '/note'

export const getAllUserNotes = async (userId, token) => {  
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${userId}`,
      {
        headers: { 'Authorization': token }
      }
    );

    return data[0];
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllUserNotes
}