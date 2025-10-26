import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface IUser {
    email: string;
}

interface UserState {
    userData: IUser | null;
}

const initialState: UserState = {
    userData: null,
};

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.userData = action.payload;
        },
        removeUserData: state => {
            state.userData = null;
        },
    },
});

export const {
    setUserData,
    removeUserData,
} = userSlice.actions;

export const selectUserData = (state: RootState): IUser | null =>
    state.user.userData;

export default userSlice.reducer;
