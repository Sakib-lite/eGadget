import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import AuthService from './services/auth.service';
import Snackbar from './../notistick/Snackbar';
import { setLoading, unsetLoading } from './ui-slice';

const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

export const register = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading());
      const response = await AuthService.register(formData);
      if (response.data.status === 'success')
        Snackbar.success(response.data.message);
      const { email, password } = formData;
      const userData = { email, password };
      dispatch(unsetLoading());
      return dispatch(login(userData));
    } catch (err) {
      dispatch(unsetLoading());
      Snackbar.error(err.response.data.message);
      return rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading());
      const response = await AuthService.login(formData);
      console.log('  response', response)
      if (response.token) Cookies.set('user', JSON.stringify(response.user));
      if (response.token) Cookies.set('token', JSON.stringify(response.token));
      Snackbar.success(response.message);
      dispatch(unsetLoading());
      window.location.reload();
      return { user: response };
    } catch (err) {
      dispatch(unsetLoading());
      Snackbar.error(err.response.data?.message);
      return rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await AuthService.logout();
  Cookies.remove('token')
  Cookies.remove('user')
  Snackbar.error(response.data.message);
});

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (formData, { getState, rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading());
      const state = getState();
      const response = await AuthService.updateUser(
        formData,
        state.auth.user._id
      );
      Cookies.set('user', JSON.stringify(response.user));
      Snackbar.success(response.message);
      window.location.reload();
      dispatch(unsetLoading());
      return { user: response };
    } catch (err) {
      dispatch(unsetLoading());
      Snackbar.error(err.response?.data?.message);
      return rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
