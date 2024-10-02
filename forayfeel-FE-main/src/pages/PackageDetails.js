import { Subscript, TodayTwoTone } from "@mui/icons-material";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaMoneyCheckAlt, FaUtensils, FaUserTie, FaRegImage, FaRegCalendarAlt, FaRegMap, FaUserFriends, FaMountain, FaTrain, FaFirstAid } from "react-icons/fa";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
// import { FcCalendar, FaRegMap } from "react-icons/fc";
const PackagesDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const initialValues = {
        from_date: "",
        person: "",
    }
    const bookingSchema = Yup.object().shape({
        from_date: Yup.string().required("Date is required"),

        person: Yup.string().required("person is required")
    })
    return (
        <>
            <div className="package-details-main">
                {/* <h1>{id}</h1> */}
                {/* //days
                //nights
                //tour_name
                //tour_details
                //from
                //to
                //places to be
                //price
                //image */}
                <div className="package-details-img">
                    <img src="https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>

                <Row className="package-details-content-main">
                    <Col className="package-details-content-inner col-md-9">
                        <p className="package-details-content-title">Snow Trekking Manali</p>
                        <span className="package-details-content-discription">Experience the most glamorous trek of Himalayas!</span>
                        <div className="text-secondary ml-n1 quickInfo">
                            <div className="form-row d-flex">
                                <div class="col-6 col-md-3 mt-2">
                                    <div class="media">
                                        <div class="icon_357u8 d-flex">
                                            <FaRegCalendarAlt />
                                            <div class="title_1AYG1">
                                                Duration
                                            </div>
                                        </div>
                                        <div class="media-body ml-1">

                                            <small>6 days / 5 nights</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 mt-2">
                                    <div class="media">
                                        <div class="icon_357u8">
                                            <FaRegMap />
                                            <div class="title_1AYG1">
                                                Difficulty
                                            </div>
                                        </div>
                                        <div class="media-body ml-1">

                                            <small>Easy to Moderate</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 mt-2">
                                    <div class="media">
                                        <div class="icon_357u8">
                                            <FaUserFriends />
                                            <div class="title_1AYG1">
                                                Age Group
                                            </div>
                                        </div>
                                        <div class="media-body ml-1">

                                            <small>15-35 years</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 mt-2">
                                    <div class="media">
                                        <div class="icon_357u8"><FaMountain />
                                            <div class="title_1AYG1">
                                                Max Altitude
                                            </div>
                                        </div>
                                        <div class="media-body ml-1">

                                            <small>14,100 ft</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-main">
                            <div className="about-title">
                                About
                            </div>
                            <div className="about-inner">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Earum, architecto ab esse itaque saepe tempora aliquid at voluptas nesciunt quidem nam?
                                    Odio voluptas totam iste dolores possimus quidem eveniet distinctio.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="package-details-card-main col-md-3">
                        <span className="package-money">&#8377;7999<span className="package-person">/person</span></span>
                        <div className="package-includes">Includes</div>
                        <Row className="icon-group-main">
                            <div className="icon-pannel-main">
                                <span><FaMoneyCheckAlt /></span>
                                <p>GST</p>
                            </div>
                            <div className="icon-pannel-main">
                                <span><FaUtensils /></span>
                                <p>Food</p>
                            </div>
                        </Row>
                        <Row className="icon-group-main">
                            <div className="icon-pannel-main">
                                <span><FaRegImage /></span>
                                <p>Accomodation</p>
                            </div>
                            <div className="icon-pannel-main">
                                <span><FaUserTie /></span>
                                <p>Instructor</p>
                            </div>
                        </Row>
                        <Row className="icon-group-main">
                            <div className="icon-pannel-main">
                                <span><FaFirstAid /></span>
                                <p>First Aid</p>
                            </div>
                            <div className="icon-pannel-main">
                                <span><FaTrain /></span>
                                <p>Travelling</p>
                            </div>
                        </Row>
                        <Row className="button-main">
                            <Button className="button-inner" onClick={handleShow}>BOOK NOW</Button>
                        </Row>

                    </Col>
                </Row>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make Bookings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={bookingSchema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {
                                (formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        isValid,
                                        dirty
                                    } = formik;
                                    return (
                                        <div>
                                            <div className="row">
                                                <div className="col-md-12 form-input-group">
                                                    <label htmlFor="from_date">From Date:</label>
                                                    <input type="date" placeholder="Enter Frome Date" name="from_date" value={values.from_date} onChange={handleChange} onBlur={handleBlur} />
                                                    {touched.from_date && errors.from_date && <span className="error-msg">{errors.from_date}</span>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 form-input-group">
                                                    <label htmlFor="person">Person:</label>
                                                    <input type="number" placeholder="Enter Person" name="person" value={values.person} onChange={handleChange} onBlur={handleBlur} />
                                                    {touched.person && errors.person && <span className="error-msg">{errors.person}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }

                        </Formik>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

    // from date
    // persons
    // amount
    // Todate
}
export default PackagesDetails;