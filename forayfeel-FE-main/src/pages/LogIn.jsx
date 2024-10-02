import { Row } from "react-bootstrap";
import LogInForm from "../components/LogInForm"
import LogInFormik from "../components/LoginFormik";
import SignupFormik from "../components/SignUPFormik";


const LogIn = () => {
    return (
        <>
            <div>
                <Row className="p-5">
                    {/* <LogInForm /> */}
                    <LogInFormik />
                    <SignupFormik />
                </Row>
            </div>
        </>
    )
}
export default LogIn;