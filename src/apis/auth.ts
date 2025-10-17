import qs from 'qs';
import axiosBaseKTV from '../utils/axiosBase';
export const loginAPI = (params: { username: string; password: string }) => {
  return axiosBaseKTV.post('/technician/login', params);
};

export const getErrorAuth = () => {
  return axiosBaseKTV.get('/status-401');
};
export const logoutAPI = (params: { refresh_token: string }) => {
  return axiosBaseKTV.post('/technician/logout', params);
};