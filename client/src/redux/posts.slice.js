import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postService } from "../common/callApi";

export const getPostPaging = createAsyncThunk(
  "post/getPaging",
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
  posts: {},
  pageNum: ''
};

const getPostSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logOutAction: (state) => {
    //   state.token = null;
    //   state.userInfo = {};
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostPaging.fulfilled, (state, { payload }) => {
      state.pageNum = payload;
    });
    builder.addCase(getPostPaging.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
  },
});
export const {  } = getPostSlice.actions;
export default getPostSlice.reducer;