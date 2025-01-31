import { Formik, Form, Field, ErrorMessage } from "formik";
import { Col } from "react-bootstrap";
import * as Yup from "yup";
import { LoginAdmin } from "../apis/auth"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const AdminLoginForm = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    };
    const SignInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars minimum"),
    });
    const onLogin = (data) => {
        LoginAdmin(data).then(response => {
            toast.success('Login Sucessfully');
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/admin/dashboard")
            return response.data
        }).catch((error) => {
            toast.error(error?.response?.data?.message || 'Something went wrong.');
        })
    }
    return (
        <Col className="login-form">
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    onLogin(values)
                    console.log(values)
                }}
            >


                {(formik) => {
                    const { errors, touched, isValid, dirty,handleSubmit } = formik;
                    return (
                        <div className="container">
                            <h3>Sign In</h3>
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={errors.email && touched.email ?
                                            "input-error" : null}
                                    />
                                    <ErrorMessage name="email" component="span" className="error" />
                                </div>

                                <div className="form-row">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className={errors.password && touched.password ?
                                            "input-error" : null}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="span"
                                        className="error"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}
                                >
                                    Sign In
                                </button>
                            </Form>
                        </div>
                    );
                }

                }
            </Formik>
        </Col>
    )
}
export default AdminLoginForm;