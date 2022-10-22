import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/comment";
import postSlice from "./modules/post";
import themeSlice from "./modules/theme";
import idealSlice from "./modules/ideal";

const store = configureStore({
  reducer: {
    ideal: idealSlice.reducer,
    post: postSlice.reducer,
    comment: commentSlice.reducer,
    theme: themeSlice.reducer
  },
});

export default store;