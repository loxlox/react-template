import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
// import * as actionDashboard from '../../store/dashboard/action'


const Dashboard = (props) => {
	return (
		<Card>
			This is dashboard page.
		</Card>
	)
}

const stateToProps = (state) => ({})

const dispatchToProps = (dispatch) => ({})

export default connect(stateToProps, dispatchToProps)(Dashboard)