import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboard/reducer'

export default configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
})
