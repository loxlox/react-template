import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/reducers';

export default configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
});
