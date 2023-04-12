import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard.js/Dashboard";
import EventsHome from "../../Pages/Events/Events/EventsHome";
import Home from "../../Pages/Home/Home/Home";
import ForgetPassword from "../../Pages/Login/ForgetPassword";
import Login from "../../Pages/Login/Login";
import EmailVerificationSuccess from "../../Pages/Signup/EmailVerificationSuccess";
import OTPForm from "../../Pages/Signup/OTPForm";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PlayersHome from "../../Pages/Players/Players/PlayersHome";
import AddCampusHome from "../../Pages/AddCampus/AddCampus/AddCampusHome";
import AddPlayers from "../../Pages/Players/Players/AddPlayers";
import InvitePlayers from "../../Pages/Players/Players/InvitePlayers";
import AddCampus from "../../Pages/AddCampus/AddCampus/AddCampus";
import RegisteredCampuses from "../../Pages/AddCampus/AddCampus/RegisteredCampuses";
import ValidatorsHome from "../../Pages/Validators/Validators/ValidatorsHome";
import AddValidators from "../../Pages/Validators/Validators/AddValidators";
import RegisteredValidators from "../../Pages/Validators/Validators/RegisteredValidators";
import HostAnEvent from "../../Pages/Events/Events/HostAnEvent";
import OnGoingEventsHome from "../../Pages/Events/Events/OnGoingEvents/OnGoingEventsHome";
import AddItinerary from "../../Pages/Events/Events/AddItinerary";
import AddOrganizer from "../../Pages/Events/Events/AddOrganizer";
import About from "../../Pages/Home/Home/About";
import SupportPage from "../../Pages/Home/Home/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/otp",
        element: <OTPForm></OTPForm>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/verification",
        element: <PrivateRoute><EmailVerificationSuccess></EmailVerificationSuccess></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  },
  {
    path: "/events",
    element: <PrivateRoute><EventsHome></EventsHome></PrivateRoute>,
  },
  {
    path: "/players",
    element: <PrivateRoute><PlayersHome></PlayersHome></PrivateRoute>,
  },
  {
    path: "/campus",
    element: <PrivateRoute><AddCampusHome></AddCampusHome></PrivateRoute>,
  },
  {
    path: "/validators",
    element: <PrivateRoute><ValidatorsHome></ValidatorsHome></PrivateRoute>,
  },
  {
    path: "/add-players",
    element: <PrivateRoute><AddPlayers></AddPlayers></PrivateRoute>,
  },
  {
    path: "/invite-players",
    element: <PrivateRoute><InvitePlayers></InvitePlayers></PrivateRoute>,
  },
  {
    path: "/add-campus",
    element: <PrivateRoute><AddCampus></AddCampus></PrivateRoute>,
  },
  {
    path: "/registered-campuses",
    element: <PrivateRoute><RegisteredCampuses></RegisteredCampuses></PrivateRoute>,
  },
  {
    path: "/add-validators",
    element: <PrivateRoute><AddValidators></AddValidators></PrivateRoute>,
  },
  {
    path: "/registered-validators",
    element: <PrivateRoute><RegisteredValidators></RegisteredValidators></PrivateRoute>,
  },
  {
    path: "/host-an-event",
    element: <PrivateRoute><HostAnEvent></HostAnEvent></PrivateRoute>,
  },
  {
    path: "/on-going-event",
    element: <PrivateRoute><OnGoingEventsHome></OnGoingEventsHome></PrivateRoute>,
  },
  {
    path: "/add-itinerary",
    element: <PrivateRoute><AddItinerary></AddItinerary></PrivateRoute>,
  },
  {
    path: "/add-organizer",
    element: <PrivateRoute><AddOrganizer></AddOrganizer></PrivateRoute>,
  },
  {
    path: "/about-us",
    element: <About></About>,
  },
  {
    path: "/support",
    element: <SupportPage></SupportPage>,
  },
]);

export default router;