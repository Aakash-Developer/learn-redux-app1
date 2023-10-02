import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashBoardLayout";
import UserDetailsLayout from "../layouts/UserDetailsLayout";

import PersonalDetails from "../fetures/user_Details/PersonalDetails";
import EducationDetails from "../fetures/user_Details/EducationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/profile/:id",
    element: <UserDetailsLayout />,
    children: [
      {
        path: "personal-details", // corrected path
        element: <PersonalDetails />,
      },
      {
        path: "education-details", // corrected path
        element: <EducationDetails />,
      },
    ],
  },
]);

export default function RootRouter() {
  return <RouterProvider router={router} />;
}
