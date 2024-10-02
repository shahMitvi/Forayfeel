import { Button } from "react-bootstrap";
import {
  FaList,
  FaMapMarkedAlt,
  FaThLarge,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="brand-name">
        <Link to="/" class="navbar-brand">
          Foray<span>Feel</span>
        </Link>
      </div>
      <div className="sidebar-icon-main">
        <Link as="button" to="/admin/dashboard" className="sidebar-icon-inner">
          <span>
            <FaThLarge />
          </span>
          <p>Dashboard</p>
        </Link>
        <Link as="button" to="/admin/tours" className="sidebar-icon-inner">
          <span>
            <FaMapMarkedAlt />
          </span>
          <p>Tours</p>
        </Link>
        <Link as="button" to="/admin/booking" className="sidebar-icon-inner">
          <span>
            <FaList />
          </span>
          <p>Bookings</p>
        </Link>
        <Link as="button" to="/admin/customers" className="sidebar-icon-inner">
          <span>
            <FaUsers />
          </span>
          <p>Customers</p>
        </Link>
        <Link as="button" to="/admin/admins" className="sidebar-icon-inner">
          <span>
            <FaUserTie />
          </span>
          <p>Admins</p>
        </Link>
      </div>
      <div className="logout-btn">
        <Button>Logout</Button>
      </div>
    </div>
  );
};
export default SideBar;
