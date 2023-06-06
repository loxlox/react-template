import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import { statusHtmlStorage } from '../../services/helpers'
// import * as actionDashboard from '../../store/dashboard/action'


const Dashboard = (props) => {
	console.log(statusHtmlStorage('test'))
	return (
		<Card>
			This is dashboard page.
		</Card>
	)
}

const stateToProps = (state) => {
	return {}
}

const dispatchToProps = (dispatch) => {
	return {}
}

export default connect(stateToProps, dispatchToProps)(Dashboard)