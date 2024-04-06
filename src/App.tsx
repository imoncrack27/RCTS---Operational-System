import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SummaryCount from "./pages/Dashboard/SummaryCount";
import AppointmentList from "./pages/Dashboard/AppointmentList";
import CreateAppointment from "./pages/Dashboard/CreateAppointment";
import CalendarView from "./pages/Dashboard/CalendarView";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
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
        ``
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/summary-count",
          element: <SummaryCount />,
        },
        {
          path: "/appointment-list",
          element: <AppointmentList />,
        },
        {
          path: "/create-appointment",
          element: <CreateAppointment />,
        },
        {
          path: "/calendar-view",
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
