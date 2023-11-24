import Logo from "../assets/image/Logo.svg";
import "../Styles/login.css";
import { useEffect, useState } from "react";

const Login = () => {
    const [view, setView] = useState(false);
    
    useEffect(() => {
        if (view) {
            setTimeout(() => {
                setView(false)
            }, 3000);
        }

    }, [view]);

  return (
    <div className="login-container">
      <div className="logo-box">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="login-box">
        <p className="login-header pryText">Admin User&apos;s Login</p>
        <div className="login-form">
          <label className="pryText">
            Username
            <input
              type="text"
              name="username"
              placeholder="Admin@fixit.ng"
              className="text-input secText"
            />
          </label>
          <label className="pryText">
            Password
            <div className="pass-container">
              <input
                type={view ? "text" : "password"}
                name="password"
                placeholder="**********"
                className="pass-input secText"/>
                          <p className="secText" onClick={() => setView(!view)}> {view ? "Hide" : "Show"}</p>
            </div>
          </label>
          <div className="login-checkbox">
            <input
              type="checkbox"
              name="rememberMe"
              placeholder="Remember Me"
            />
            <p>Always keep me logged in</p>
          </div>
        </div>
        <button className="login-button secText">Log in</button>
      </div>
    </div>
  );
};

export default Login;
