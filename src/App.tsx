import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SummaryCount from "./pages/Dashboard/SummaryCount";
import AppointmentList from "./pages/Dashboard/AppointmentList";
import CreateAppointment from "./pages/Dashboard/CreateAppointment";
import CalendarView from "./pages/Dashboard/CalendarView";
import Navbar from "./components/navbar/Navbar";

// Login, Signup, and ForgotPass are new imports
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPassword";
import VerifyCode from "./pages/verifyCode";
import SetPassword from "./pages/SetPassword";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/summarycount",
          element: <SummaryCount />,
        },
        {
          path: "/appointmentlist",
          element: <AppointmentList />,
        },
        {
          path: "/createappointment",
          element: <CreateAppointment />,
        },
        {
          path: "/calendarview",
          element: <CalendarView />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPass />,
    },
    {
      path: "/verifycode",
      element: <VerifyCode />,
    },
    {
      path: "/setpassword",
      element: <SetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
