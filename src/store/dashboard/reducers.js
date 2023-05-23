import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		content: 'This is dashboard page.',
	},
	reducers: {
		content: (state) => {
			console.log(state.value)
		},
	},
})

// Action creators are generated for each case reducer function
export const { content } = dashboardSlice.actions

export default dashboardSlice.reducer