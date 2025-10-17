import axiosBaseKTV from "../utils/axiosBase";

export const getNotification = () => {
  return axiosBaseKTV.get(`/notification?notification_for_ktv=1`);
};