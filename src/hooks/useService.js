import axios from 'axios';
import API_URL from '../config/config';

const useService = async (method, endpoint, data = null) => {
  const url = `${API_URL}${endpoint}`;
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`Error al realizar la solicitud a ${url}:`, error);
    throw error;
  }
};

export default useService;