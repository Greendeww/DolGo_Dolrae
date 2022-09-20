import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/Api";
import { setCookie } from "../../shared/Cookie";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// export const __signUp = createAsyncThunk(
//   "user/__signUp",
//   async (user, thunkAPI) => {
//     try {
//       const response = await axios.post("http://localhost:3001/users", user);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __emailCheck = createAsyncThunk(
//   "user/__idCheck",
//   async (user, thunkAPI) => {
//     try {
//       const response = await instance.post("", user);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __login = createAsyncThunk(
  "user/__login",
  async (user, thunkAPI) => {
    try {
      const response = await instance.post("/api/member/login", user);
      if (response.data.success) {
        setCookie("isLogin", response.headers.Authorization);
        setCookie("ACCESS_TOKEN", response.headers.Authorization);
        setCookie("REFRESH_TOKEN", response.headers.Refreshtoken);
        localStorage.setItem("email", response.data.data.email);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state,action) => {
      instance.post("/api/member/signup", action.payload);
      state.users.push(action.payload);
    },

  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(__signUp.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__signUp.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.users = action.payload;
    //     window.alert("회원가입 되었습니다.");
    //     console.log(action.payload);
    //   })
    //   .addCase(__signUp.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });

    // builder
    //   .addCase(__emailCheck.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(__emailCheck.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.users = action.payload;
    //     window.alert("사용 가능한 이메일입니다.");
    //     console.log(action.payload);
    //   })
    //   .addCase(__emailCheck.rejected, (state, action) => {
    //     state.isLoading = false;
    //     window.alert("이미 존재하는 이메일입니다..");
    //     state.error = action.payload;
    //   });

      builder
      .addCase(__login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        window.alert("로그인 되었습니다.");
        console.log(action.payload);
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice;