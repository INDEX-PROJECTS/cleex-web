import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeaderSchema } from '../types/headerSchema';

const initialState: HeaderSchema = {
    
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: headerActions } = headerSlice;
export const { reducer: headerReducer } = headerSlice;