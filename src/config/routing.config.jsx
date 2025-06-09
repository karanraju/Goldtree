import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layout/homelayout';
import UserLayout from '../layout/userlayout';
import UserDashboard from '../layout/user.dashboard';
import About from '../pages/about';
import Contact from '../pages/contactus';
import Gallery from '../pages/gallery';
import UserReport from '../layout/user.report';
import LoginForm from '../pages/login';
import ProfileEdit from '../pages/profile.edit';

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/login" element={<LoginForm/>}/>



      <Route path="/user" element={<UserLayout />}>
        <Route path="profile" element={<UserReport/>} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile/edit" element={<ProfileEdit/>} />
      </Route>
    </Routes>
  );
};

export default RoutingConfig;
