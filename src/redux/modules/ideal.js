import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";

const initialState = {
  list : [],
  isLoading: false,
  error: null
}

export const getData = createAsyncThunk(
  "ideal/getData",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.get("/api/place/worldcup");
      sessionStorage.setItem("ideal", "start");
      console.log(res)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const idealSlice = createSlice ({
  name: "ideal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      // console.log(state.list);
    })
    .addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.payload;
      // console.log("rejected");
    });
  }
})

export default idealSlice;