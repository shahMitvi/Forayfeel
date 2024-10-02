import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterestP, FaLandmark, FaPhone, FaVoicemail, FaEnvelope } from "react-icons/fa";
const ContactForm = () => {
    const initialValues = {
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    }
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().required("Name is Required"),

        email: Yup.string().email().required("Email Address is required"),

        number: Yup.string().required("Phone Number is Required"),

        subject: Yup.string().required("Subject is Required"),

        message: Yup.string().required("Message is Required")
    })
    return (
        <>
            <Row className="p-5">
                <div className="col-md-4 contact-us-main ">
                    <span>Talk With Our Team</span>
                    <p>Any Question?</p>
                    <p>Feel Free To Contact</p>
                    <div className="icons">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                        <FaPinterestP></FaPinterestP>
                    </div>
                </div>
                <div className="col-md-8 px-5">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={contactFormSchema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {
                            (formik) => {
                                const {
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    errors,
                                    touched,
                                    handleBlur,
                                    isValid,
                                    dirty } = formik;
                                return (
                                    <div className="form-group">
                                        <div className="row">
                                            {console.log(touched.name)}
                                            <div className="input-group-main">
                                                <input type="text" placeholder="Enter Your Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.name && errors.name && <span className="error-msg">{errors.name}</span>}
                                            </div>
                                            <div className="input-group-main">
                                                <input type="email" placeholder="Enter Your Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.email && errors.email && <span className="error-msg">{errors.email}</span>}
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                        {console.log(touched.email)}
                                       
                                    </div> */}
                                        <div className="row">
                                            {console.log(touched.number)}
                                            <div className="input-group-main">
                                                <input type="tel" placeholder="Enter Your Phone Number" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.number && errors.number && <span classname="error-msg">{errors.number}</span>}
                                            </div>
                                            <div className="input-group-main">
                                                <input type="text" placeholder="Enter Subject" name="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.subject && errors.subject && <span className="error-msg">{errors.subject}</span>}
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                        {console.log(touched.subject)}
                                        <div className="input-group-main">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" placeholder="Enter Subject" name="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.subject && errors.subject && <span className="error-msg">{errors.subject}</span>}
                                        </div>
                                    </div> */}
                                        <div className="row">
                                            {console.log(touched.message)}
                                            <div className="input-group-main">
                                                <textarea placeholder="Enter Your Message" name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} />
                                                {touched.message && errors.message && <span className="error-msg">{errors.message}</span>}
                                            </div>
                                        </div>
                                        <button className="mt-2" onClick={handleSubmit}>Send A Message</button>
                                    </div>
                                )
                            }
                        }
                    </Formik>
                </div>
            </Row>
            <Row className="p-5 contact-stat">
                <Col className="card-main d-flex justify-content-center align-items-center p-5">
                    <div className="card-icon">
                        <FaLandmark />
                    </div>
                    <div className="card-content">
                        <p>Address</p>
                        <span>805,xyz avenue, Surat, IND</span>
                    </div>
                </Col>
                <Col className="card-main d-flex justify-content-center align-items-center p-5">
                    <div className="card-icon">
                        <FaPhone />
                    </div>
                    <div className="card-content">
                        <p>Phone</p>
                        <span>+91-7777777777</span>
                    </div>
                </Col>
                <Col className="card-main d-flex justify-content-center align-items-center p-5">
                    <div className="card-icon">
                        <FaEnvelope />
                    </div>
                    <div className="card-content">
                        <p>Address</p>
                        <span>contact@forayfeel.com</span>
                    </div>
                </Col>
            </Row>

        </>

    )
}

export default ContactForm;