import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/Api";

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
        `http://43.201.10.227/api/place/${payload}`,
        // {
        //   headers: {
        //     Authorization: localStorage.getItem("Authorization"),
        //     RefreshToken: localStorage.getItem("RefreshToken"),
        //   },
        // }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const onLikeDetail = createAsyncThunk(
  "like/onLikePost",
  async (payload, thunkApI) => {
    try {
      const data = await instance.post(
        `/api/auth/place/like/${payload}`,
        {},
      );
      // window.location.reload()
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
            .addCase(onLikeDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(onLikeDetail.fulfilled, (state,action) => {
                state.isLoading = false;
                state.detail = action.payload;
                console.log(state.detail)
            })
            .addCase(onLikeDetail.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
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