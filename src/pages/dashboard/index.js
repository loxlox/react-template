import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'

function Dashboard() {
	const content = useSelector((state) => state.dashboard.content)
	return (
		<Card title={content}>
			{content}
		</Card>
	)
}

export default Dashboard