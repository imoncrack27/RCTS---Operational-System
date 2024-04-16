import "./Signup.css";
import { Checkbox, Button } from "antd";

const Signup = () => {
  const onclick = () => {
    console.log("clicked");
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h1 className="appointment-scheduling-signup">
          Appointment Scheduling
        </h1>
        <h3 className="appointment-signup">Signup to your Account</h3>
        <div className="signup-img">
          <img src="Group 1.svg" className="img-signup" alt="image" />
        </div>
        <div className="forms-signup">
          <form className="input-signup">
            <input
              type="username"
              title="username"
              placeholder="username"
              required
            />
            <input type="email" title="email" placeholder="email" required />
            <input
              type="tel"
              title="contact number"
              placeholder="contact number"
              required
              maxLength={13}
              min={3}
            />
            <input
              type="number"
              title="verify ID number"
              placeholder="Verify ID number"
              required
            />
          </form>

          <form className="signup-input">
            <input
              type="password"
              title="password"
              placeholder="password"
              required
            />
            <input
              type="password"
              title="confirm password"
              placeholder="confirm password"
              required
            />
            <input
              type="tel"
              title="ID number"
              placeholder="ID number"
              required
            />
            <Checkbox className="checkbox-signup">
              I accept the general terms and condition of use
            </Checkbox>
            <br />
            <Checkbox className="checkbox-signup2">
              I accept the Privacy and Policy
            </Checkbox>
          </form>
        </div>

        <div className="button-signup">
          <Button
            type="primary"
            htmlType="submit"
            title="button"
            className="signup-button"
            style={{ backgroundColor: "#04c45c" }}
            onClick={onclick}
          >
            Signup
          </Button>
        </div>
        <span className="span-signup">
          Already have an Account?{" "}
          <a href="/login" className="already-have-an-account">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default Signup;
