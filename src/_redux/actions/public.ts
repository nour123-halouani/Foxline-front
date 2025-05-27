import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
