import { configureStore } from "@reduxjs/toolkit";
import search from "../redux_slices/searchSlice";

const reduxStore = configureStore({
	reducer: {
		search: search,
	},
});

export default reduxStore;