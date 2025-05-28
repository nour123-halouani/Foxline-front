import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getFAQs = createAsyncThunk(
    'public/getFAQs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseURL}/public/faq`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


export const createFAQ = createAsyncThunk(
    'public/createFAQ',
    async (data: {
        questionEn: string;
        questionAr: string;
        responseEn: string;
        responseAr: string;
    }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/public/faq`, data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getContactUsList = createAsyncThunk(
    'public/getContactUsList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseURL}/public/contact-us`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const createContactUs = createAsyncThunk(
    'auth/createContactUs',
    async ({ formData, t, navigate }: {
        formData: {
            fullName: string, email: string, phone: string, subject: string, message: string
        };
        t: (key: string) => string; navigate: (url: string) => void
    },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post(`${baseURL}/public/contact-us`, formData);
            toast.success(t(response.data?.message));
            navigate('/');
            return response.data;
        } catch (error: any) {
            const errorMessage = t(error?.response?.data?.message);
            toast.error(errorMessage);
            return rejectWithValue(error.response?.data);
        }
    }
)