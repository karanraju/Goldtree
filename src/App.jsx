import Header from "./components/header";
import BlogSection from "./pages/blog.section";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
