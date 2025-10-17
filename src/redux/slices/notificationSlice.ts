import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNotification } from "../../apis/notifcation";
import { NotificationDto } from "../../interfaces/notificationInterface";
export const fetchAllNotification = createAsyncThunk(
    "notification/fetchAllNotification",
    async () => {
        try {
            const response = await getNotification();
            return response.data;
        } catch (error: any) {
        }
    }
);

interface NotificationState {
    result: NotificationDto[]
    notificationDetail: NotificationDto | null,
    isFetching: boolean,
}

const initialState: NotificationState = {
    isFetching: true,
    notificationDetail: null,
    result: [],
};

export const notification = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotificationDetail(state, action) {
            state.notificationDetail = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllNotification.fulfilled, (state, action) => {
            state.result = action.payload?.data;
        });
    },
});

export const { setNotificationDetail} = notification.actions;

export default notification.reducer;