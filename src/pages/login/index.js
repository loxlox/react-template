import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, Input, Row } from "antd";
import styles from "./login.module.css";

function Login() {
  let navigate = useNavigate();
  const handleLoginForm = () => {
    navigate("/");
  };

  return (
    <div className={styles.auth_login_page}>
      <div className={styles.auth_wrapper}>
        <Row justify="center">
          <Col xs={24} md={5}>
            <Card>
              <div className={styles.logo} />
              {/* <CustomAlert metaData={loginPassResponse.meta} /> */}
              <Form
                colon={false}
                autoComplete="off"
                layout="vertical"
                onFinish={handleLoginForm}
              >
                <Form.Item>
                  <Input
                    required
                    placeholder="Username"
                    name="username"
                    // value={input.username}
                    // onChange={handleInputChange}
                  />
                </Form.Item>
                <Form.Item className={styles.form_item_password}>
                  <Input.Password
                    required
                    placeholder="Password"
                    name="password"
                    // value={input.password}
                    // onChange={handleInputChange}
                  />
                </Form.Item>
                <Link to="/forgot-password" className={styles.forgot_password}>
                  Forgot password?
                </Link>
                <Button
                  // disabled={loading}
                  // loading={loading}
                  className={styles.btn_login}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
