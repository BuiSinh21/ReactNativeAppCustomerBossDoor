import axiosBaseKTV from "../utils/axiosBase";

export const getListOrder = (user_id:number) => {
  return axiosBaseKTV.get(`/baocaodonhangdichvu_ktv/${user_id}`);
};

// export const updateTechnician = (params: {
//   id: number,
//   full_name?: string;
//   phone?: string;
//   cccd?: string;
//   address?: string;
//   avatar?: string;
// }, user_id: number) => {
//   return axiosBaseKTV.put(`/technician`);
// };


// export const showTechniciant = (user_id: number) => {
//   return axiosBaseKTV.get(`/technician/${user_id}`,);
// };
// export const resetPassword = (user_id: number) => {
//   return axiosBaseKTV.get(`/technician/${user_id}`,);
// };


