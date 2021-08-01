import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "../common/callApi";

export const loginUser = createAsyncThunk(
  "users/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { username, password } = userData;
      const response = await postService("/login", {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  userInfo: {},
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutAction: (state) => {
      state.token = null;
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.token = "fake_token";
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});
export const { logOutAction } = authSlice.actions;
export default authSlice.reducer;