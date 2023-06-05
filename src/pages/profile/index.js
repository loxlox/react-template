import React from 'react'
import dayjs from 'dayjs'
import { Avatar, Card, Col, DatePicker, Form, Input, Row, Tabs, Typography } from 'antd'
import { FiUser } from 'react-icons/fi'
import avatar from '../../assets/img/avatar.png'

function Profile() {
	const tabItem = [
		{
			key: 'about',
			label: (
				<span>
					<FiUser /> About
				</span>
			),
			children: (
				<Form
					colon={false}
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					autoComplete="off"
				>
					<Form.Item label="Username">
						<Input
							bordered={false}
							defaultValue="John Doe"
						/>
					</Form.Item>
					<Form.Item label="E-mail">
						<Input
							type="email"
							bordered={false}
							defaultValue="john.doe@email.com"
						/>
					</Form.Item>
					<Form.Item label="Birthday">
						<DatePicker
							showTime
							showToday
							bordered={false}
							defaultValue={dayjs()}
						/>
					</Form.Item>
				</Form>
			)
		}
	]

	return (
		<Card>
			<Row gutter={28}>
				<Col>
					<Avatar shape="square" size={300} src={avatar} />
				</Col>
				<Col>
					<Typography.Title level={3}>John Doe</Typography.Title>
					<Typography.Title level={5}>Frontend Developer</Typography.Title>
					<Tabs
						items={tabItem}
					/>
				</Col>
			</Row>
		</Card>
	)
}

export default Profile