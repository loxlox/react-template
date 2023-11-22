import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Form, Input, Row } from "antd";
import styles from "./forgot.module.css";

function ForgotPassword() {
  return (
    <div className={styles.auth_forgot_page}>
      <div className={styles.auth_wrapper}>
        <Row justify="center">
          <Col xs={24} md={5}>
            <Card>
              <Form autoComplete="off" colon={false} layout="vertical">
                <Form.Item>
                  <Input
                    required
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    danger
                    type="primary"
                    htmlType="submit"
                    className={styles.btn_forgot_password}
                  >
                    Reset Password
                  </Button>
                  <Link to="/login" className={styles.btn_back_login}>
                    Back to Login Page
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ForgotPassword;
