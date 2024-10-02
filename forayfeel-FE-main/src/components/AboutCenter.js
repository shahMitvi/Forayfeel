import { Col, Row } from "react-bootstrap"

const AboutCenter = () => {
    return (
        <Row className="red-bar-main p-5">
            <img src="https://t4.ftcdn.net/jpg/04/92/49/69/360_F_492496970_aMUGqkWSgXhxMmf0FM6nNzLJfKRDoo6j.jpg" />
            <Row className="red-bar-content">
                <Col className="col-md-9 red-bar-content-inner">
                    <span>Plan Your Trip With Us</span>
                    <p>Ready For An Unforgotable Tour?</p>
                </Col>
                <Col className="col-md-3 red-bar-button">
                    <button type="button">BOOK NOW</button>
                </Col>
            </Row>
        </Row>
    )
}

export default AboutCenter;