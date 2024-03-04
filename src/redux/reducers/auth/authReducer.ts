import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from './authType';
import { ReduxStore } from '@/redux/types';

const initialState: AuthType = {
    isLogin: false,
    accessToken: '',
    refreshToken: '',
    user: {},
};

const reducer = createSlice({
    name: ReduxStore.auth,
    initialState: initialState,
    reducers: {
        setUser: (state: AuthType, action: PayloadAction<AuthType>) => {
            state.isLogin = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },
    },
});

export const { setUser } = reducer.actions;
export const authReducer = reducer.reducer;
