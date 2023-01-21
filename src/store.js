import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice";
import videoSlice from "./slices/videoSlice";

export default configureStore({
	reducer: {
		sidebar: sidebarSlice,
		videos: videoSlice,
	},
});
