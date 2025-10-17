import axiosBaseKTV from "../utils/axiosBase";

export const getAllTechnician = () => {
  return axiosBaseKTV.get('/technician');
};

// export const updateTechnician = (param: any) => {
//   return axiosBaseKTV.put(`/technician`, param);
// };S

export const updateTechnician = (params: {
  id: number,
  full_name?: string;
  phone?: string;
  cccd?: string;
  address?: string;
}) => {
  return axiosBaseKTV.put(`/technician`, params);
};
export const updateTechnicianSupports = (params: {
  id?: null,
  customers_id: number,
  error_description?: string;
  image?: string | null;
}) => {
  return axiosBaseKTV.post(`/supports`, params);
};
export const showTechniciant = (user_id: number) => {
  return axiosBaseKTV.get(`/technician/${user_id}`,);
};
export const changePassword = (params: {
  current_password: string,
  password?: string;
}, user_id: number) => {
  return axiosBaseKTV.post(`/technician/${user_id}/change-password`, params);
};


