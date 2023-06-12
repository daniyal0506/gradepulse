import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InstructorData from "./pages/InstructorData/InstructorData";
import About from "./pages/About/About";
import CourseInfo from "./pages/CourseInfo/CourseInfo";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./pages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/InstructorData/:id",
    element: <InstructorData />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/CourseInfo/:id",
    element: <CourseInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
