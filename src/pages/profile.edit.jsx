import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Avatar,
  Menu,
  Layout,
} from "antd";
import {
  EditOutlined,
  BellOutlined,
  AppstoreOutlined,
  SecurityScanOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "../styles/profile.edit.css";
import Sanam from "../assets/sanam.jpeg";

const { Title, Text } = Typography;
const { Sider, Content } = Layout;

export default function ProfileEdit() {
  const [form] = Form.useForm();

  const menuItems = [
    {
      key: "edit-profile",
      icon: <EditOutlined />,
      label: "Edit Profile",
      extra: <RightOutlined style={{ color: "#6b7280" }} />,
    },
    {
      key: "notifications",
      icon: <BellOutlined />,
      label: "Notifications",
    },
    {
      key: "choose-plan",
      icon: <AppstoreOutlined />,
      label: "Choose Plan",
    },
    {
      key: "security",
      icon: <SecurityScanOutlined />,
      label: "Password & Security",
    },
  ];

  return (
    <Layout className="profile-layout">
      <Sider width={256} className="profile-sidebar">
        <Menu
          mode="vertical"
          defaultSelectedKeys={["edit-profile"]}
          items={menuItems}
          className="sidebar-menu"
        />
      </Sider>

      <Layout>
        <Content className="profile-content">
          <div className="profile-header">
            <Title level={2} className="profile-title">
              Edit Profile
            </Title>
          </div>

          <div className="avatar-section">
            <div className="avatar-container">
              <Avatar size={96} src={Sanam} className="profile-avatar" />
              <Button
                shape="circle"
                icon={<EditOutlined />}
                className="edit-avatar-btn"
                size="small"
              />
            </div>
          </div>

          <Form
            form={form}
            name="profile"
            layout="vertical"
            className="profile-form"
            initialValues={{
              firstName: "Sanam",
              lastName: "Chaudhary",
              email: "chysanan@gmail.com",
              phone: "9860201829",
              address: "Lalitpur, Harisiddhi",
              city: "Lalitpur",
              state: "Lalitpur",
              zipCode: "1245",
              country: "Nepal",
              password: "password34322",
            }}
          >
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">First Name</Text>}
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">Last Name</Text>}
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label={<Text className="form-label">Email</Text>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter valid email!",
                },
              ]}
            >
              <Input className="profile-input"></Input>
            </Form.Item>

            <Form.Item
              label={<Text className="form-label">Contacts Number</Text>}
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input className="profile-input" />
            </Form.Item>

            <Form.Item
              label={<Text className="form-label">Address</Text>}
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input className="profile-input" />
            </Form.Item>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">City</Text>}
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your city",
                    },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">State</Text>}
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "Please input your state!",
                    },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">Zip code</Text>}
                  name="zipCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your zip code!",
                    },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<Text className="form-label">Country</Text>}
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please input your country!",
                    },
                  ]}
                >
                  <Input className="profile-input" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label={<Text className="form-label">Password</Text>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="profile-input" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="save-button">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
