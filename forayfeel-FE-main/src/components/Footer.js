
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    let user = localStorage.getItem('user') || null
    return (<footer>
        <Container>
            <Row>
                <Col md={4}>
                    <Link to="/" class="navbar-brand">Foray<span>Feel</span></Link>
                    <p>We are a company that does stuff.</p>
                    {!user && <p><Link to="/admin/login" className="">Admin Login</Link></p>}
                </Col>
                <Col md={4}>
                    <h5>Contact Us</h5>
                    <ul>
                        <li>Email: info@company.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Address: 123 Main St, Anytown USA</li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h5>Follow Us</h5>
                    <ul>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /> </a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>)

}
export default Footer