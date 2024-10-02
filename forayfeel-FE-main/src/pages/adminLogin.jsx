import { Row } from "react-bootstrap";
import AdminLoginForm from "../components/adminLoginForm";
import AdminSignupForm from "../components/adminSignupForm";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="title">
        <Link to="/" class="navbar-brand">
          Foray<span>Feel</span>
        </Link>
        <h1>Admin</h1>
      </div>

      <Row className="admin-login-main">
        <AdminLoginForm />
        <AdminSignupForm />
      </Row>
    </div>
  );
};

export default AdminLogin;
