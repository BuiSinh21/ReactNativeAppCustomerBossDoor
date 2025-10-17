import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DetailOrder, DetailOrderReport, Services } from "../../interfaces/auth";
import { getListOrder } from "../../apis/reports";
// First, create the thunk
export const fetchOrdersReport = createAsyncThunk(
    "repoty/fetchOrdersTechnician",
    async (user_id: number) => {
        try {
            const response = await getListOrder(user_id);
            return response.data;
        } catch (error: any) {
        }
    }
);

interface ReportState {
    result: DetailOrderReport[]
    orderReportService: Services[] 
    orderDetail: DetailOrder | undefined
    isFetching: boolean,
}

const initialState: ReportState = {
    isFetching: true,
    result: [],
    orderReportService: [],
    orderDetail: undefined,
};

export const orderReport = createSlice({
    name: "orderReport",
    initialState,
    reducers: {
        setOrderReportService(state, action) {
            state.orderReportService = action.payload;
        },
        setOrderDetail(state, action) {
            state.orderDetail = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrdersReport.pending, (state) => {
            state.isFetching = true;
        });

        builder.addCase(fetchOrdersReport.rejected, (state) => {
            state.isFetching = false;
        });

        builder.addCase(fetchOrdersReport.fulfilled, (state, action) => {
            state.isFetching = false;
            state.result = action.payload?.data?.data;
        });
    },
});

export const {setOrderReportService,setOrderDetail } = orderReport.actions;

export default orderReport.reducer;