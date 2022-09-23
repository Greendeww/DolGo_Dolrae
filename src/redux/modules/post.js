import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    post: [],
    detail:{},
    isLoading: false,
    error: null,
}

export const _getDetail = createAsyncThunk(
  "post/getDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.125.38.46:8080/api/place/${payload}`,
        // {
        //   headers: {
        //     Authorization: localStorage.getItem("Authorization"),
        //     RefreshToken: localStorage.getItem("RefreshToken"),
        //   },
        // }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const onLikeDetail = createAsyncThunk(
  "like/onLikePost",
  async (payload, thunkApI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        // `http://13.125.225.96:8080/products/likes/${payload}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        } //post는 두번째 인자가 데이터가 들어가야해서 {}를 넣어줌 데이터가 없으면 headers를 데이터로 인식
      );
      window.location.reload()
      return payload;
    } catch (error) {
      return thunkApI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
extraReducers:(builder) => {
        builder
            .addCase(_getDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(_getDetail.fulfilled, (state,action) => {
                state.isLoading = false;
                state.detail = action.payload;
                console.log(state.detail)
            })
            .addCase(_getDetail.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {} = postSlice.actions;
export default postSlice