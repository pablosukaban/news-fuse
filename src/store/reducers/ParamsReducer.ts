import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ls, ParamsType } from '../../types';

const initialState: ParamsType = {
    countries: 'us',
    languages: 'en',
    sort: 'published_desc',
};

export const ParamsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<ls>) => {
            state.languages = action.payload;
        },
    },
});
