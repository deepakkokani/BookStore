import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/ThemeSlice";

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
