import { Formik } from "formik";
import { Col } from "react-bootstrap";
import * as Yup from "yup";
import { registerAdmin } from "../apis/auth";
import { toast } from "react-toastify";

const AdminSignupForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "1523456894",
    gender: "female",
    password: "",
    confirm_password: "",
  };
  const signupSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),

    last_name: Yup.string().required("Last name is required"),

    email: Yup.string().email().required("Email is required"),

    password: Yup.string().required("Password is required"),

    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf(
        [Yup.ref("password")],
        "confirm password must be same as password"
      ),
  });
  const onAdminLogin = (data) => {
    registerAdmin(data)
      .then((response) => {
        toast.success("Admin Registered successfully");
        return response.data;
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong.");
      });
  };
  return (
    <Col className="signup-form w-auto">
      <h3>Sign UP</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          console.log(values);
          onAdminLogin(values);
        }}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <div>
              <div className="row">
                {console.log(touched.first_name)}
                <div className="col-md-6 form-input-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={values.first_name}
                    name="first_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.first_name && errors.first_name && (
                    <span className="error-msg">{errors.first_name}</span>
                  )}
                </div>
                <div className="col-md-6 form-input-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.last_name && errors.last_name && (
                    <span className="error-msg">{errors.last_name}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <span className="error-msg">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-input-group">
                  <label name="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <span className="error-msg">{errors.password}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-input-group">
                  <label name="confirm_password">Confirm-Password</label>
                  <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.confirm_password && errors.confirm_password && (
                    <span className="error-msg">{errors.confirm_password}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign Up
              </button>
            </div>
          );
        }}
      </Formik>
      {/* <h1>Hello</h1> */}
    </Col>
  );
};
export default AdminSignupForm;
