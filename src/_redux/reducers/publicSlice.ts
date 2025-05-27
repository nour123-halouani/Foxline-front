import { createSlice } from "@reduxjs/toolkit";
import { createFAQ, getFAQs } from "../actions/public";

const initialState = {
    faq: [],
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
            });
    },
});

export const { } = publicSlice.actions;
export default publicSlice.reducer;
