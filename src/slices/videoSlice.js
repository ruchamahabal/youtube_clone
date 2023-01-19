import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videos",
	initialState: { videoList: [] },
	reducers: {
		cacheVideoList: (state, action) => {
			state.videoList = action.payload;
		},
	},
});

export const { cacheVideoList } = videoSlice.actions;
export default videoSlice.reducer;
