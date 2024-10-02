import { Button } from "react-bootstrap";
import { useState } from "react";

const SignUpForm = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        gender: "",
        password: "",
        confirm_password: ""
    })
    const [userErrMsg, setUserErrMsg] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        gender: "",
        password: "",
        confirm_password: ""
    })
    const validateForm = () => {
        let errObj = { ...userErrMsg }
        if (!user.first_name || user.first_name?.trim()?.length <= 0) errObj['first_name'] = "first name is required"
        else errObj['first_name'] = ""
        if (!user.last_name || user.last_name?.trim()?.length <= 0) errObj['last_name'] = "last name is required"
        else errObj['last_name'] = ""
        if (!user.email || user.email?.trim()?.length <= 0) errObj['email'] = "email is required"
        else if (!user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) errObj['email'] = "email is invalid"
        else errObj['email'] = ""
        if (!user.phone_number || user.phone_number?.trim()?.length <= 0) errObj['phone_number'] = "phone number is required"
        else if (!user.phone_number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) errObj['phone_number'] = "phone number is invalid"
        else errObj['phone_number'] = ""
        if (!user.password || user.password?.trim()?.length <= 6) errObj['password'] = "password must be six character"
        else errObj['password'] = ""
        if (!user.confirm_password || user.confirm_password?.trim()?.length <= 6) errObj['confirm_password'] = "password must be six character"
        else if (user.confirm_password !== user.password) errObj['confirm_password'] = "password must be same"
        else errObj['confirm_password'] = ""
        if (!user.gender) errObj['gender'] = "gender is required"
        else errObj['gender'] = ""
        setUserErrMsg(errObj)
    }
    const ondataChange = (e) => {
        let name = e.target.name
        console.log("name", name)
        setUser({ ...user, [name]: e.target.value })
    }
    const onsubmit = (e) => {
        e.preventDefault()
        validateForm()
        console.log("user==>", user)
    }

    return (
        <>
            <form id="signupform">
                <div className="row">
                    <div className="col-md-6 form-input-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" placeholder="Enter First Name" value={user.first_name} name="first_name" onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.first_name}</span>
                    </div>
                    <div className="col-md-6 form-input-group" >
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="last_name" value={user.last_name} onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.last_name}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.email}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-input-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input type="tel" placeholder="Enter Phone Number" name="phone_number" value={user.phone_number} onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.phone_number}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="gender">Gender:</label>
                        {/* <div className=""> */}
                        <span className="pl-3"><input type="radio" name="gender" value="Male" onChange={ondataChange} />Male</span>
                        <span className="pl-3"><input type="radio" name="gender" value="Female" onChange={ondataChange} />Female</span>
                        <span className="error-msg">{userErrMsg.gender}</span>
                        {/* </div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-input-group">
                        <label name="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.password}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-input-group">
                        <label name="confirm_password">Confirm-Password</label>
                        <input type="password" placeholder="Enter Confirm Password" name="confirm_password" value={user.confirm_password} onChange={ondataChange} />
                        <span className="error-msg">{userErrMsg.confirm_password}</span>
                    </div>
                </div>
                <button className="mt-2" onClick={onsubmit}>Sign Up</button>
            </form>
        </>
    )
}
export default SignUpForm;