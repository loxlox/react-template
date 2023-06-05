import { useEffect, useState } from 'react'
import { Alert } from 'antd'

function CustomAlert({ metaData }) {
	const [alert, setAlert] = useState({
		show: false,
		message: '',
		type: 'error'
	})
	const handleAlertClose = () => {
		setAlert({
			show: false,
			message: '',
			type: 'error'
		})
	}

	useEffect(() => {
		let msg = ''
		let props = {}
		if (metaData.code === 201) {
			msg = 'Data has been created.'
			if (metaData.message !== '' && metaData.message !== null) {
				msg = metaData.message
			}
			props = {
				show: true,
				message: msg,
				type: 'success'
			}
		}
		if (metaData.code > 201) {
			msg = metaData.message
			if (metaData.errors.length > 0) {
				let newArr = []
				for (let i = 0; i < metaData.errors.length; i++) {
					const error = metaData.errors[i]
					if (error.msg) {
						newArr.push(error.msg)
					}
					if (error.message) {
						newArr.push(error.message)
					}
				}
				msg = newArr.join(', ')
			}
			props = {
				show: true,
				message: msg,
				type: 'error'
			}
		}
		setAlert(props)
	}, [metaData])

	return (
		<>
			{alert.show && (
				<Alert
					closable
					showIcon
					message={alert.message}
					type={alert.type}
					onClose={handleAlertClose}
				/>
			)}
		</>
	)
}

export default CustomAlert
