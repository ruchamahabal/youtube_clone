import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice";
import videoSlice from "./slices/videoSlice";
import chatSlice from "./slices/chatSlice";

export default configureStore({
	reducer: {
		sidebar: sidebarSlice,
		videos: videoSlice,
		chat: chatSlice,
	},
});
