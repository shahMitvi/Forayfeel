import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
const Layout2 = () => {
    return (
        <>
            <Row className="admin-main">
                <Col className="col-lg-2 sidebar">
                    <SideBar />
                </Col>
                <Col className="col-lg-10">
                    <Outlet />
                </Col>
            </Row>

        </>
    )
}

export default Layout2;