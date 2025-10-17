import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../interface';
import { use } from 'react';
import { Province } from '../../components/Interface';

const initialState = {
  access_token: undefined,
  refresh_token: undefined,
  user: {},
  userDisplay: {},
  role: {},
  fcmToken: undefined,
  isFilter: false,
  province: [{}],
  geolocation: {}
} as AuthState;

export const fetchProvince = createAsyncThunk(
  "account/fetchProvince",
  async () => {
    const BASE_URL = "https://provinces.open-api.vn/api/v2";
    try {
      const url = `${BASE_URL}`;
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      const data = await resp.json();
      return data as Province[];
    } catch (error: any) {

    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | undefined>) {
      state.access_token = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string | undefined>) {
      state.refresh_token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserDisplay(state, action) {
      state.userDisplay = action.payload;
    },

    setRole(state, action) {
      state.role = action.payload;
    },
    setFcmToken(state, action: PayloadAction<string | undefined>) {
      state.fcmToken = action.payload;
    },
    setIsFilter(state, action: PayloadAction<boolean>) {
      state.isFilter = action.payload;
    },
    setGeolocation(state, action) {
      state.geolocation = action.payload;
    },

    resetAuthState() {
      return initialState;
    },

  }, extraReducers: (builder) => {
    builder.addCase(fetchProvince.fulfilled, (state, action) => {
      state.province = action.payload || [];
    });
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  resetAuthState,
  setUser,
  setRole,
  setFcmToken,
  setIsFilter,
  setUserDisplay, setGeolocation
} = authSlice.actions;

export default authSlice.reducer;
