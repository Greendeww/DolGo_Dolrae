import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./modules/user";

const store = configureStore({
  reducer: {

    user: userSlice.reducer,

  },
});

export default store;