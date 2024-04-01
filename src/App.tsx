import React, { FunctionComponent } from "react";
import Signup from "./Components/signup";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";

import { Routes, Route } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Dashboard} />
      <Route path="/login" Component={Login} />
      <Route path="login/signup" Component={Signup} />
      {/* Other routes can be defined here */}
    </Routes>
  );
};

export default App;
