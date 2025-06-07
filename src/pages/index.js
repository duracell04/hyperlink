import React, { lazy } from "react";
import "../components/button/styles.scss";

const Home = lazy(() => import("./Home"));
const ProjectDetails = lazy(() => import("./ProjectDetails"));
const UserDashboard = lazy(() => import("./TeamDetails"));

const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const ForgetPass = lazy(() => import("./ForgetPass"));
const Roadmap = lazy(() => import("./Roadmap"));
const Blogs = lazy(() => import("./Blogs"));
const BlogDetails = lazy(() => import("./BlogDetails"));
const Contact = lazy(() => import("./Contact"));
const InnerToolbox = lazy(() => import("./InnerToolbox"));
const AboutUs = lazy(() => import("./aboutUs"));

const routes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Register /> },
  { path: "/forgetPass", component: <ForgetPass /> },

  { path: "/", component: <Home /> },

  // User profile
  { path: "/dashboard", component: <UserDashboard /> },

  // Roadmap
  { path: "/roadmap", component: <Roadmap /> },
  // { path: '/blog_list', component: <BlogList />},

  // Bloga
  { path: "/blogs", component: <Blogs /> },
  { path: "/blogs/:id", component: <BlogDetails /> },

  // Contact page
  { path: "/contact", component: <Contact /> },

  // Toolboxes
  { path: "/toolboxes/:id", component: <InnerToolbox /> },
  { path: "/toolboxes/:id/:toolid", component: <ProjectDetails /> },

  // About us
  { path: "/aboutUs", component: <AboutUs /> },
];

export default routes;
