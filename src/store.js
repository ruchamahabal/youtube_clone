import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";

export default configureStore({
	reducer: {
		sidebar: sidebarSlice,
	},
});
