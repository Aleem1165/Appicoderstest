import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface IsAuthenticatedState {
    value: boolean;
}

const initialState: IsAuthenticatedState = {
    value: false,
};

const isAuthenticatedSlice = createSlice({
    name: 'isAuthenticated',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setAuthenticated } = isAuthenticatedSlice.actions;

export const selectIsAuthenticated = (state: RootState): boolean =>
    state.isAuthenticated.value;

export default isAuthenticatedSlice.reducer;
