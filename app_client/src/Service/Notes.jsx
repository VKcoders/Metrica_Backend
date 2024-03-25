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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNote = async (text, id, token) => {
  try {
    const { data } = await api.post(
      ENDPOINT,
      {
        userId: id,
        note: text
      },
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const editNote = async (text, id, token) => {
  try {
    const { data } = await api.put(
      ENDPOINT,
      {
        noteId: id,
        note: text
      },
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = async (id, token) => {
  try {
    await api.delete(ENDPOINT, {
      headers: { 'Authorization': token },
      data: { noteId: id }
    });
  } catch (error) {
    console.error(error);
  }
};