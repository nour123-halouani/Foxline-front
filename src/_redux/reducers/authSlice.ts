import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}

const initialState: any = {
  settings: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;