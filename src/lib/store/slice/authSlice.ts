import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from 'cookies-next';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      state.token = token;
      setCookie('token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
    },
    logout: state => {
      state.token = null;
      deleteCookie('token');
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
