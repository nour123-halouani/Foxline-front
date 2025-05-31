import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const signUp = createAsyncThunk(
  'auth/signUpUser',
  async (
    {
      formData,
      t,
      navigate,
    }: { formData: any; t: (key: string) => string; navigate: (url: string) => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signup`, formData);
      toast.success(t(response.data?.message));
      navigate('/customer/profile');
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message);
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signInUser',
  async (
    {
      formData,
      t,
      navigate,
    }: { formData: { email: string; password: string }; t: (key: string) => string; navigate: (url: string) => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, formData);
      toast.success(t(response.data?.message));
      navigate('/customer/profile');
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message);
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const sendResetCode = createAsyncThunk(
  'auth/sendResetCodeForUser',
  async (
    {
      formData,
      t,
      navigate,
    }: { formData: { email: string }; t: (key: string) => string; navigate: (url: string) => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseURL}/auth/reset-password/send-code`, formData);
      toast.success(t(response.data?.message));
      navigate(`/forgot-password/otp-verfication/${formData.email}`);
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message);
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const optVerification = createAsyncThunk(
  'auth/optVerification',
  async (
    {
      formData,
      t,
      navigate,
    }: { formData: { email: string, code: string }; t: (key: string) => string; navigate: (url: string) => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseURL}/auth/reset-password/validate-code`, formData);
      toast.success(t(response.data?.message));
      navigate(`/forgot-password/reset-password/${formData.email}`);
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message);
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (
    {
      formData,
      t,
      navigate,
    }: { formData: { email: string, newPassword: string }; t: (key: string) => string; navigate: (url: string) => void },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseURL}/auth/reset-password/confirm`, formData);
      toast.success(t(response.data?.message));
      navigate('/sign-in');
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message);
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (
    { t }: { t: (key: string) => string },
    { rejectWithValue }
  ) => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      const response = await axios.post(
        `${baseURL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      toast.success(t(response.data?.message));
      return response.data;
    } catch (error: any) {
      const errorMessage = t(error?.response?.data?.message || 'serverError');
      toast.error(errorMessage);
      return rejectWithValue(error.response?.data);
    }
  }
);
