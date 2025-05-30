import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { optVerification, resetPassword, sendResetCode, signIn, signUp } from "../actions/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      state.user = null;
      state.isAuthenticated = false;
      console.log("state.isAuthenticated11", state.isAuthenticated)
    },
    setUserFromToken: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      console.log("state.isAuthenticated22", state.isAuthenticated)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const { accessToken, refreshToken, ...userData } = action.payload;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData.user));
        state.user = userData.user;
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { accessToken, refreshToken, ...userData } = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("user", JSON.stringify(userData.user));
        }
        state.user = userData.user;
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(sendResetCode.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(sendResetCode.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendResetCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(optVerification.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(optVerification.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(optVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
  },
});

export const { logout, setUserFromToken } = authSlice.actions;
export default authSlice.reducer;
