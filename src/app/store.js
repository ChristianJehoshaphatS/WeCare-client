import {configureStore} from "@reduxjs/toolkit";
import home from "../features/homeGroups/homeSlice";

export default configureStore({
	reducer: {
		home,
	},
});
