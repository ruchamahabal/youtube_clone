import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
	name: "chat",
	initialState: [],
	reducers: {
		addItem: (state, action) => {
			state.splice(10, 1);
			state = state.unshift(action.payload);
		},
	},
});

export const { addItem } = chat.actions;
export default chat.reducer;
