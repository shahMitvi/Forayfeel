import { useState } from "react";

const LogInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userErrMsg, setUserErrMsg] = useState({
    email: "",
    password: "",
  });
  const ondataChange = (e) => {
    let data = e.target.name;
    setUser({ ...user, [data]: e.target.value });
  };
  const uservalidate = () => {
    let errobject = { ...userErrMsg };
    if (!user.email || user.email?.trim()?.length <= 0)
      errobject["email"] = "email is required";
    else if (!user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
      errobject["email"] = "email is invalid";
    else errobject["email"] = "";
    if (!user.password || user.password?.trim()?.length <= 0)
      errobject["password"] = "password is required";
    else errobject["password"] = "";
    setUserErrMsg(errobject);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(user);
    uservalidate();
  };
  return (
    <>
      <form id="signupform">
        <div className="row">
          <div className="col-md-12 form-input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={ondataChange}
            />
            <span>{userErrMsg.email}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={ondataChange}
            />
            <span>{userErrMsg.password} </span>
          </div>
        </div>
        <button type="submit" className="mt-2" onClick={onsubmit}>
          Log In
        </button>
      </form>
    </>
  );
};
export default LogInForm;
