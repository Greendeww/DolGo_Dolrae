import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

    comment:[],
    isLoading: false,
    error: null,
}

export const _getDetails = createAsyncThunk(
  "PostSlice/getDetails",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.125.225.96:8080/products/${payload}`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const _deleteComment = createAsyncThunk(
  "PostSlice/delete",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://13.125.225.96:8080/auth/products/${payload.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            RefreshToken: localStorage.getItem("RefreshToken"),
          },
        }
      );
      window.location.replace("/");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const _updatePost = createAsyncThunk(
//   "PostSlice/update",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.put(
//         `http://13.125.225.96:8080/auth/products/${payload.id}`,
//         payload.data,
//         {
//           headers: {
//             "Content-Type": "multipart/form",
//             Authorization: localStorage.getItem("Authorization"),
//             RefreshToken: localStorage.getItem("RefreshToken"),
//           },
//         }
//       );
//       window.location.replace(`/products/${payload.id}`);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );


export const commentSlice = createSlice({

    name:"comment",
    initialState,
    reducers:{},
extraReducers:(builder) => {
        builder
            .addCase(_deleteComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(_deleteComment.fulfilled, (state,action) => {
                state.isLoading = false;
                const deleteState = state.data.findIndex(post => post.id === action.payload)
                state.comment.slice(deleteState,1)
            })
            .addCase(_deleteComment.rejected, (state,action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
//         builder
//             .addCase(_updatePost.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(_updatePost.fulfilled, (state,action) => {
//                 state.isLoading = true;
//                 state.data = action.payload;
//             })
//             .addCase(_updatePost.rejected, (state,action) => {
//                 state.isLoading = true;
//                 state.error = action.payload;
//             })

    }
})


export const {} = commentSlice.actions;
export default commentSlice