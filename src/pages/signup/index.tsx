import { FunctionComponent } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup: FunctionComponent = () => {
  return (
    <>
      <div className="signup">
        <section className="frame-parent2">
          <img className="frame-child" alt="" src="/Group 1.svg" />
          <img className="circles-icon2" alt="" src="/Circles.svg" />
        </section>
        <div className="sign-up-prompt-parent">
          <div className="sign-up-prompt">
            <div className="title">
              <h1 className="appointment-scheduling2">
                <span className="appointment-scheduling-txt-container2">
                  <p className="appointment2">Appointment</p>
                  <p className="scheduling2">Scheduling</p>
                </span>
              </h1>
            </div>
          </div>
          <div className="form">
            <h2 className="sign-up-to">Sign up to your account</h2>
          </div>
          <form className="username-input">
            <div className="sign-up-form">
              <div className="email2">
                <input
                  type="text"
                  placeholder="Username"
                  className="username"
                  required
                ></input>
              </div>
              <div className="password-su">
                <input
                  type="password"
                  placeholder="Password"
                  className="password1"
                  required
                ></input>
                <div className="sign-up-form-instance">
                  <div className="sign-up-form-instance-child" />
                </div>
              </div>
              <div className="sign-up-form-child" />
            </div>
            <div className="sign-up-form1">
              <div className="email2">
                <input
                  type="email"
                  placeholder="Email"
                  className="username1"
                  required
                ></input>
                <div className="email3">
                  <div className="email-child" />
                </div>
              </div>
              {/* <img
              className="mdieye-icon1"
              loading="lazy"
              alt=""
              src="/mdieye-1.svg"
            /> */}
              <div className="confirm-password">
                <input
                  type="password"
                  placeholder="Confirm-password"
                  className="confirm-password1"
                  required
                ></input>
                <div className="rectangle-parent">
                  <div className="frame-item" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="signup-inner">
          <div className="sign-up-form-parent">
            <div className="sign-up-form2">
              <div className="contact-number">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  maxLength={11}
                  className="contact-number1"
                  required
                ></input>
                <div className="contact-number2">
                  <div className="material-symbol-checked" />
                </div>
              </div>
              <div className="password2">
                <input
                  type="text"
                  placeholder="ID Number"
                  className="password3"
                  required
                ></input>
                <div className="rectangle-group">
                  <div className="frame-inner" />
                </div>
              </div>
              <div className="sign-up-form-item" />
              <div className="password4">
                <input
                  type="text"
                  placeholder="Verify ID Number"
                  className="password5"
                  required
                ></input>
              </div>
              {/* <img
              className="material-symbolsverified-user-icon"
              loading="lazy"
              alt=""
              src="/materialsymbolsverifieduser.svg"
            /> */}
            </div>
          </div>
          <form className="labeled-checkbox">
            <input
              type="checkbox"
              title="terms"
              id="terms"
              className="terms"
              required
            />
            <label htmlFor="terms" className="label-terms">
              I accept the general{" "}
              <Link to="" className="Links">
                {" "}
                terms{" "}
              </Link>
              and
              <Link to="" className="Links">
                {" "}
                condition of use
              </Link>
            </label>
            <form className="signup-second-checkbox">
              <input
                type="checkbox"
                title="privacy"
                className="privacy-checkbox"
                required
              />
              <label htmlFor="privacy" className="privacy-policy">
                I accept the
                <Link to="" className="Links">
                  {" "}
                  privacy{" "}
                </Link>{" "}
                and
                <Link to="" className="Links">
                  {" "}
                  policy
                </Link>
              </label>
            </form>
          </form>
        </div>
        <div className="button-signup-container">
          <Link to="/login">
            {" "}
            <button type="submit" className="signup-button2">
              {/* Added type="submit" */}
              SIGNUP
            </button>
          </Link>

          <p className="already-have-an-account-paragraph">
            Already have an account? &nbsp;{" "}
            <Link to="/login" className="already-have-an-account-login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
