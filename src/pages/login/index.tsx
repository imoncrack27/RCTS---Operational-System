import { FunctionComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login: FunctionComponent = () => {
  return (
    <>
      <div className="login">
        <section className="landing-page-parent">
          <div className="landing-page" />
          <div className="illustration-bg" />
          <img
            className="undraw-secure-login-pdn4-1-2"
            loading="lazy"
            alt=""
            src="/human.svg"
          />

          <img className="circles-icon" alt="" src="/Circles.svg" />
        </section>
        <h1 className="appointment-scheduling">
          <span className="appointment-scheduling-txt-container">
            <p className="appointment">Appointment</p>
            <p className="scheduling">Scheduling</p>
          </span>
        </h1>
        <div className="login-form">
          <div className="password-placeholder">
            <label htmlFor="email" className="email"></label>
            <input
              id="email"
              className="form-fields-container1"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label className="email"></label>
            <input
              id="password"
              className="form-fields-container"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="frame-parent">
            <div className="remember-me-label-parent">
              <div className="remember-me-label-parent">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="remember-me-label"
                />
                <label htmlFor="remember-me" className="remember-me">
                  Remember me
                </label>
              </div>
            </div>
            <Link to="/forgotpassword" className="forgot-password">
              Forgot password?
            </Link>

            {/* Changed div to anchor tag */}
          </div>
        </div>
        <h1 className="login-to-your">Login to your account</h1>
        <button type="submit" className="login-button">
          {/* Added type="submit" */}
          <div className="login-button-child" />
          <b className="connect">LOGIN</b>
        </button>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Login;
