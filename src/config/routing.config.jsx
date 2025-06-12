import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layout/homelayout';
import UserLayout from '../layout/userlayout';
import UserDashboard from '../layout/user.dashboard';
import About from '../pages/about';
import Contact from '../pages/contactus';
import Gallery from '../pages/gallery';
import UserReport from '../layout/user.report';
import ManageContacts from '../layout/managecontacts';
import MyCalendar from '../components/calendar/mycalendar';
import EditProfile from '../layout/edit.profile';
import FilterByCountry from '../layout/user.bynumber';

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
        <Route path="calendar" element={<MyCalendar/>}/>
        <Route path="editProfile" element={<EditProfile/>}/>
        <Route path="bycountry" element={<FilterByCountry/>}/>
      </Route>
    </Routes>
  );
};

export default RoutingConfig;
