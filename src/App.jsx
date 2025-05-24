import { useState } from "react";
import { ConfigProvider, Button, Space } from "antd";
import LoginForm from "./pages/login.form";
import ProfileEdit from "./pages/profile.edit"
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <ConfigProvider >
      <div className="app">
        {/* Navigation */}
        <div className="app-navigation">
          <Space>
            <Button
              type={currentPage === "login" ? "primary" : "default"}
              onClick={() => setCurrentPage("login")}
            >
              Login
            </Button>
            <Button
              type={currentPage === "profile" ? "primary" : "default"}
              onClick={() => setCurrentPage("profile")}
            >
              Profile
            </Button>
          </Space>
        </div>

        {/* Pages */}
        {currentPage === "login" && <LoginForm />}
         {currentPage === "profile" && <ProfileEdit />}
      </div>
    </ConfigProvider>
  );
}

export default App;
