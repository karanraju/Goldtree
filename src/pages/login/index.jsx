import { Form, Input, Button, Typography, Space, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import "../../styles/login.form.css";

const { Title, Text } = Typography;

export default function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Title level={2} className="login-title">
            Login
          </Title>
        </div>

        <Form
          name="login"
          layout="vertical"
          size="large"
          className="login-form"
        >
          <Form.Item
            label={<Text className="form-label">Username</Text>}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="input-icon" />}
              placeholder="Type your username"
              className="custom-input"
            />
          </Form.Item>

          <Form.Item
            label={<Text className="form-label">Password</Text>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              placeholder="Type your password"
              className="custom-input"
            />
          </Form.Item>

          <div className="forgot-password">
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              block
            >
              LOGIN
            </Button>
          </Form.Item>

          <Divider className="divider-text">Or Sign Up Using</Divider>

          <Space className="social-buttons" size="large">
            <Button
              shape="circle"
              icon={<FacebookOutlined />}
              className="social-btn facebook-btn"
              size="large"
            />
            <Button
              shape="circle"
              icon={<TwitterOutlined />}
              className="social-btn twitter-btn"
              size="large"
            />
            <Button
              shape="circle"
              icon={<GoogleOutlined />}
              className="social-btn google-btn"
              size="large"
            />
          </Space>

          <div className="signup-section">
            <Text className="signup-text">Or Sign Up Using</Text>
            <div className="signup-link">
              <a href="#" className="signup-btn">
                SIGN UP
              </a>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
