import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { refreshUser, registerUser, logInUser, logOutUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  loading: false,
};

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
const registerFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = false;
  state.loading = false;
  state.error = '';
};

const logInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.loading = false;
  state.error = '';
};

const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.loading = false;
  state.error = '';
};

const refreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.loading = false;
  state.error = '';
};

const refreshUserRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(registerUser.fulfilled, registerFulfilled)
      .addCase(logInUser.fulfilled, logInFulfilled)
      .addCase(logOutUser.fulfilled, logOutFulfilled)
      .addCase(refreshUser.fulfilled, refreshUserFulfilled)
      .addCase(refreshUser.rejected, refreshUserRejected)
      .addMatcher(
        isAnyOf(registerUser.pending, logInUser.pending, refreshUser.pending),

        handlePending
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, logInUser.rejected),

        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
