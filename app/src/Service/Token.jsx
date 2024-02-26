import api from "./api";
import { hooks } from "../Hooks";

const URL = '/login'

export const generateToken = async (obj) => {
  try {
    const { data } = await api.post(URL, obj);
    console.log(data)
    // return {status: true, name, token}; 
  } catch (error) {
    const errorResult = hooks.RequestError(error)
    if (errorResult === undefined) return {status: false, value: ""};
    console.error(...response);
  }
};