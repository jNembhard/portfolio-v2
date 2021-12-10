import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioReducer";

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export default store;
