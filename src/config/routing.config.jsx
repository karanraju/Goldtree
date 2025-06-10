import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layout/homelayout';
import UserLayout from '../layout/userlayout';
import UserDashboard from '../layout/user.dashboard';
import About from '../pages/about';
import Contact from '../pages/contactus';
import Gallery from '../pages/gallery';
import UserReport from '../layout/user.report';
import ManageContacts from '../layout/managecontacts';

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>


      <Route path="/user" element={<UserLayout />}>
        <Route path="profile" element={<UserReport/>} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="contacts" element={<ManageContacts/>} />
      </Route>
    </Routes>
  );
};

export default RoutingConfig;
