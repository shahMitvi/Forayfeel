import Layout1 from "./layouts/Layout1.js";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import LogIn from "./pages/LogIn.jsx";
// import SignUp from "./pages/SignUp.jsx";
import Packages from "./pages/Packages.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUS from "./pages/ContactUs.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import PackagesDetails from "./pages/PackageDetails.js";
import Layout2 from "./layouts/Layout2.js";
import AdminDashboard from "./pages/adminDashboard.jsx";
import AdminLogin from "./pages/adminLogin.jsx";
import AdminBookings from "./pages/adminBookings.jsx";
import AdminBookingId from "./pages/adminBookingId.jsx";
import AdminTours from "./pages/adminTours.jsx";
import AdminToursId from "./pages/adminToursId.jsx";
import Admins from "./pages/admins.jsx";
import AdminCustomer from "./pages/adminCustomer.jsx";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import AdminDashboard from "./pages/AdminDashboard.jsx";

const PublicRouteWrappper = () => {
  const user = localStorage.getItem("user") || null;
  return user ? <Navigate to="/" /> : <Outlet />;
};

const AdminPageWrapper = () => {
  const user = localStorage.getItem("user") || null;
  // return <Outlet />
  return user && JSON.parse(user)?.roles[0] == "ROLE_ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" />
  );
};
const UserPageWrapper = () => {
  const user = localStorage.getItem("user") || null;
  return user && JSON.parse(user)?.roles[0] == "ROLE_USER" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout1 />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route element={<PublicRouteWrappper />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/admin/login" element={<AdminLogin />} />
            </Route>
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactus" element={<ContactUS />} />
            <Route path="/packages/:id" element={<PackagesDetails />} />
          </Route>
          <Route element={<Layout2 />}>
            <Route element={<AdminPageWrapper />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/booking" element={<AdminBookings />} />
              <Route path="/admin/bookings/:id" element={<AdminBookingId />} />
              <Route path="/admin/tours" element={<AdminTours />} />
              <Route path="/admin/tours/:id" element={<AdminToursId />} />
              <Route path="/admin/customers" element={<AdminCustomer />} />
              <Route path="/admin/admins" element={<Admins />} />
            </Route>
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutus />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
