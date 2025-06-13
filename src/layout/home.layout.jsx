import { NavLink } from "react-router-dom";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Offer from "../pages/offers";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Offer />
      <Footer />
    </>
  )
}

export default HomeLayout;