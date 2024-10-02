import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutCenter from "../components/AboutCenter";
const Layout1 = () => {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <Outlet />
            <AboutCenter />
            <Footer />
        </div>)
}
export default Layout1;