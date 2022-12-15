import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./movieSlice";

export const store = configureStore({
  reducer: { Reducer },
});
