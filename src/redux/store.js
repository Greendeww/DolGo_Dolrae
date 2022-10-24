import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/comment";
import postSlice from "./modules/post";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export default store;