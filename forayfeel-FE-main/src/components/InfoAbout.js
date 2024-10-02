import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const InfoAbout = () => {
    return (
        <Row className="Info-main py-5">
            <Col className="col-md-6 Info-inner">
                <img src="https://wallpapercave.com/wp/wp8788340.jpg" />
            </Col>
            <Col className="col-md-6 Info-content">
                <span>Learn About Us</span>
                <p className="content-title">Dare To Explore With <Link to="/" class="navbar-brand">Foray<span>Feel</span></Link> Agency</p>
                <p className="content-inner">We are trusted by our clients and have a reputation for the best services in the field.
                    Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit.
                    It is a long established fact that a reader will be distracted by the readable content of a page.</p>
            </Col>
        </Row>

    )
}

export default InfoAbout;