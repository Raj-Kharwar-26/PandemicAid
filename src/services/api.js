import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL
});

export const getPandemics = () => api.get('/pandemics');
export const createPandemic = (pandemicData) => api.post('/pandemics', pandemicData);
export const deletePandemic = (id) => api.delete(`/pandemics/${id}`);

export const getNGOs = () => api.get('/ngos');

export default {
  getPandemics,
  createPandemic,
  deletePandemic,
  getNGOs
};