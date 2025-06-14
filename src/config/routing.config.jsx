import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogSection from "../pages/blog";
import HomeLayout from "../layout/home.layout";
import Gallery from "../pages/gallery";
const RoutingConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<BlogSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
