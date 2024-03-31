import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// TODO: Integrate with authentication later
const initialState = {
  isLogin: false
};

const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.authReducer;

export default authSlice.reducer;
