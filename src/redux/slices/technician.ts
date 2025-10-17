import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import { appColor } from "../../constant/appColor";
import { getAllTechnician } from "../../apis/technician";
import { UserAccount, UserAccountInfor } from "../../interfaces/auth";
// First, create the thunk
export const fetchAllTechnician = createAsyncThunk(
    "debt/fetchAllTechicianProfile",
    async () => {
        try {
            const response = await getAllTechnician();
            return response.data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Lỗi tải dữ liệu",
                text2: "Không thể lấy danh sách nhân viên, vui lòng thử lại sau 🚨",
                text2Style: { color: appColor.textBlack }
            });
        }
    }
);

interface TechnicianState {
    result: UserAccount[]
    totalOrders: number,
    totalRevenue: number,
    detailTechnician: UserAccountInfor | null,
    isFetching: boolean,
}

const initialState: TechnicianState = {
    isFetching: true,
    result: [],
    totalOrders: 0,
    totalRevenue: 0,
    detailTechnician: null,
};

export const technician = createSlice({
    name: "technician",
    initialState,
    reducers: {
        setDetailTechnician(state, action) {
            state.detailTechnician = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllTechnician.pending, (state) => {
            state.isFetching = true;
        });

        builder.addCase(fetchAllTechnician.rejected, (state) => {
            state.isFetching = false;
        });

        builder.addCase(fetchAllTechnician.fulfilled, (state, action) => {
            state.isFetching = false;
            state.totalOrders=action.payload?.grand_total_completed_orders;
            state.totalRevenue=action.payload?.grand_total_revenue;
            state.result = action.payload?.data;
        });
    },
});

export const { setDetailTechnician } = technician.actions;

export default technician.reducer;