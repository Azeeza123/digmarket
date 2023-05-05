import { configureStore } from "@reduxjs/toolkit";
import { HeroSlice } from "../components/Reducers/hero";

export const store =configureStore({reducer:{HeroReducer:HeroSlice.reducer}})