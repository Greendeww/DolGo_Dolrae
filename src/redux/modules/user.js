import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const __signUp = createAsyncThunk(
  "user/__signUp",
  async (user, thunkAPI) => {
    console.log(user);
    try {
      const response = await instance.post("/api/member/signup", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __emailCheck = createAsyncThunk(
  "user/__emailCheck",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await instance.post("/api/member/email", payload, {
        headers: {
          "content-type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __login = createAsyncThunk(
  "user/__login",
  async (user, thunkAPI) => {
    try {
      const response = await instance.post("/api/member/login", user);
      console.log(response);
      localStorage.setItem("isLogin", response.headers.authorization);
      localStorage.setItem("ACCESS_TOKEN", response.headers.authorization);
      localStorage.setItem("REFRESH_TOKEN", response.headers.refreshtoken);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("nickname", response.data.nickname);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __logout = createAsyncThunk(
  "user/__logout",
  async (user, thunkAPI) => {
    try {
      const response = await instance.post("/api/auth/member/logout");
      window.location.reload();
      localStorage.removeItem("username");
      localStorage.removeItem("nickname");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
      localStorage.removeItem("THEME_CODE");
      localStorage.removeItem("THEME_NAME");
      localStorage.removeItem("AREA_CODE");
      localStorage.removeItem("AREA_NAME");
      localStorage.removeItem("SIGUNGU_CODE");
      localStorage.removeItem("SIGUNGU_NAME");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __submitCode = createAsyncThunk(
  "user/__SubmitCode",
  async (code, thunkAPI) => {
    const response = await instance.post("api/member/codeEmail", code, {
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      instance.post("/api/member/signup", action.payload);
      // state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__emailCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__emailCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        // window.alert("사용 가능한 이메일입니다.");
        console.log(action.payload);
      })
      .addCase(__emailCheck.rejected, (state, action) => {
        state.isLoading = false;
        // window.alert("이미 존재하는 이메일입니다..");
        state.error = action.payload;
      });

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

    builder
      .addCase(__submitCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__submitCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.emailOk = action.payload;
      })
      .addCase(__submitCode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { signUp, logout, submitCode } = userSlice.actions;
export default userSlice;
