// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx"; // acts as layout
import Header from "./Pages/Header.jsx";
import About from "./Pages/About.jsx";
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';
import ProjectDetails from "./components/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // App contains the <Header /> and layout
      <App />
    ),
    children: [
      { path: "/", element: <About /> },
      { path: "/Skill", element: <Skill /> },
      { path: "/Project", element: <Project /> },
      { path: "/projectdetails/:id", element: <ProjectDetails /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

