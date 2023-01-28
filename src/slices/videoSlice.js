import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videos",
	initialState: { videoList: [], filteredVideoList: [] },
	reducers: {
		cacheVideoList: (state, action) => {
			state.videoList = action.payload;
		},

		setFilteredVideoList: (state, action) => {
			const filteredVideos = Object.assign({}, state.videoList);

			if (action.payload !== "All")
				filteredVideos.items = filteredVideos?.items?.filter((video) =>
					video?.snippet?.tags?.includes(action.payload.toLowerCase())
				);

			state.filteredVideoList = filteredVideos;
		},
	},
});

export const { cacheVideoList, setFilteredVideoList } = videoSlice.actions;
export default videoSlice.reducer;
