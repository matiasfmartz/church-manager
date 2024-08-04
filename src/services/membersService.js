import axios from 'axios';
import API_URL from '../config/config';

export const getAllMembers = async () => {
  try {
    const response = await axios.get(`${API_URL}/members`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los miembros:', error);
    throw error;
  }
};
