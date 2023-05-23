import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
	const content = useSelector((state) => state.dashboard.value)
	console.log(content)
	return (
		<>This is Dashboard page.</>
	)
};

export default Dashboard;