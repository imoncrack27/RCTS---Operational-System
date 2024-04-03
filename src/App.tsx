import React, { FunctionComponent } from "react";
import Signup from "./pages/signUp";
import Login from "./pages/login";
import Dashboard from "./pages/dashBoard";
import { Routes, Route } from "react-router-dom";
import ForgotPass from "./pages/forgotPassword";
import VerifyCode from "./pages/verifyCode";
import SetPassword from "./pages/setPassword";

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
