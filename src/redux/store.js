import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/comment";
import userSlice from "./modules/user";

const store = configureStore({
  reducer: {

    user: userSlice.reducer,
    comment: commentSlice.reducer
  },
});

export default store;