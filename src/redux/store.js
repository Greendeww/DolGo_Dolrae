import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/comment";
import postSlice from "./modules/post";
import userSlice from "./modules/user";
import themeSlice from "./modules/theme";

const store = configureStore({
  reducer: {

    post: postSlice.reducer,
    user: userSlice.reducer,
    comment: commentSlice.reducer,
    theme: themeSlice.reducer
  },
});

export default store;