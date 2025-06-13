import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogSection from "../pages/blog";
import HomeLayout from "../layout/home.layout";

const RoutingConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />

        <Route path="/blog" element={<BlogSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
