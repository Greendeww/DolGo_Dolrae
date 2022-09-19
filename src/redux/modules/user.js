import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const __signUp = createAsyncThunk(
  "user/__signUp",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/api/member/signup", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __emailCheck = createAsyncThunk(
  "user/__idCheck",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        window.alert("회원가입 되었습니다.");
        console.log(action.payload);
      })
      .addCase(__signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(__emailCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__emailCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        window.alert("중복된 이메일입니다.");
        console.log(action.payload);
      })
      .addCase(__emailCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice;
