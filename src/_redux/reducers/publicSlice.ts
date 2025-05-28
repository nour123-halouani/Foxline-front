import { createSlice } from "@reduxjs/toolkit";
import { createContactUs, createFAQ, getContactUsList, getFAQs } from "../actions/public";

const initialState = {
    faq: [],
    contactUsList: [],
    loading: false,
    error: null,
};

const publicSlice = createSlice({
    name: "public",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFAQs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFAQs.fulfilled, (state, action) => {
                state.loading = false;
                state.faq = action.payload;
            })
            .addCase(getFAQs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
            .addCase(createFAQ.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createFAQ.fulfilled, (state, action) => {
                state.loading = false;
                state.faq = action.payload;
            })
            .addCase(createFAQ.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
            .addCase(createContactUs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createContactUs.fulfilled, (state, action) => {
                state.loading = false;
                state.faq = action.payload;
            })
            .addCase(createContactUs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
            .addCase(getContactUsList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContactUsList.fulfilled, (state, action) => {
                state.loading = false;
                state.contactUsList = action.payload;
            })
            .addCase(getContactUsList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as any;
            })
    },
});

export const { } = publicSlice.actions;
export default publicSlice.reducer;
