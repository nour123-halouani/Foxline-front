import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAccessToken } from "@/_redux/actions/auth";

export const initializeAuth = createAsyncThunk("auth/checkAuth", async () => {
  await checkAccessToken();
  return true;
});

interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}

interface Settings {
  shopDomain: string;
  apiKey: string;
}

const initialState: any = {
  settings: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutAction(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      console.log('state.isAuthenticated', state.isAuthenticated)
    },
    updatedSuccess(state, action: PayloadAction<Settings>) {
      state.settings = action.payload;
      state.error = null;
    },
    updatedFailure(state, action: PayloadAction<string>) {
      state.settings = null;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeAuth.fulfilled, (state, action) => {
      state.isAuthenticated = true;
    });
    builder.addCase(initializeAuth.rejected, (state) => {
      state.isAuthenticated = false;
    });
  },
});

export const {
  loginSuccess,
  loginFailure,
  logoutAction,
  updatedFailure,
  updatedSuccess,
} = authSlice.actions;

export default authSlice.reducer;