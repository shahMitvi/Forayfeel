import { Col, Row } from "react-bootstrap"
import { FaCrosshairs, FaMapMarked, FaRegListAlt, FaRegThumbsUp } from "react-icons/fa";
// import { GrCheckboxSelected } from "react-icons/gr";

const WorkProcess = () => {
    return (
        <>
            <Row className="featured-title">
                <p>
                    Work Process
                </p>
            </Row>
            <Row className="process-main">
                <Col className="d-flex">
                    <div className="process-card">
                        <FaRegListAlt />
                        <p className="process-title">See Available Options</p>
                        <p className="process-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </Col>
                <Col className="d-flex">
                    <div className="process-card">
                        <FaCrosshairs />
                        <p className="process-title">Find What you Want</p>
                        <p className="process-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </Col>
                <Col className="d-flex">
                    <div className="process-card">
                        <FaRegThumbsUp />
                        <p className="process-title">Perform Booking</p>
                        <p className="process-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
                <Col className="d-flex">
                    <div className="process-card">
                        <FaMapMarked />
                        <p className="process-title">Go & Explore Now</p>
                        <p className="process-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default WorkProcess