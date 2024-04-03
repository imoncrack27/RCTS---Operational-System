import React, { FunctionComponent } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import ForgotPass from "./pages/ForgotPassword";
import VerifyCode from "./pages/verifyCode";
import SetPassword from "./pages/SetPassword";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Dashboard} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/forgotpassword" Component={ForgotPass} />
      <Route path="/verifycode" Component={VerifyCode} />
      <Route path="/setpassword" Component={SetPassword} />

      {/* Other routes can be defined here */}
    </Routes>
  );
};

export default App;
