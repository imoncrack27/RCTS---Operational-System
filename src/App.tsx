import React, { FunctionComponent } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SummaryCount from "./pages/Dashboard/SummaryCount";
import AppointmentList from "./pages/Dashboard/AppointmentList";
import CreateAppointment from "./pages/Dashboard/CreateAppointment";
import CalendarView from "./pages/Dashboard/CalendarView";
import { Routes, Route, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import ForgotPass from "./pages/ForgotPassword";
import VerifyCode from "./pages/verifyCode";
import SetPassword from "./pages/SetPassword";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "components/menu/Menu";

const App: FunctionComponent = () => {
  const Layout = () => {
    return (
      <div className="main"></div>
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer"></div>
  <Footer />
      </div>
    
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Dashboard/>
      ),
    },
    
    {
      path: "Summary Count",
      element: <SummaryCount/>
    },
    {
      path: "List of Appointments",
      element: <AppointmentList/>
    },
    {
      path: "Create Appointment",
      element: <CreateAppointment/>
    },
    {
      path: "Calendar View",
      element: <CalendarView/>
    },
  ]);
  return (
    <RouterProvider router ={router}
    // <Routes>
    //   <Route path="/" Component={Dashboard} />
    //   <Route path="/login" Component={Login} />
    //   <Route path="/signup" Component={Signup} />
    //   <Route path="/forgotpassword" Component={ForgotPass} />
    //   <Route path="/verifycode" Component={VerifyCode} />
    //   <Route path="/setpassword" Component={SetPassword} />

    //   {/* Other routes can be defined here */}
    // </Routes>
  );
};

export default App;
