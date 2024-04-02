import React, { FunctionComponent } from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import ForgotPass from "./pages/forgotpw";
import VerifyCode from "./pages/verify-code";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Dashboard} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/forgotpassword" Component={ForgotPass} />
      <Route path="/verifycode" Component={VerifyCode} />

      {/* Other routes can be defined here */}
    </Routes>
  );
};

export default App;
