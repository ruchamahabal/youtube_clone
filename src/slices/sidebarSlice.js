import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState: { openMenu: false },
	reducers: {
		toggleMenu: (state) => {
			state.openMenu = !state.openMenu;
		},
	},
});

export const { toggleMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
