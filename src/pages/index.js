import Home from "./Home";
import ProjectDetails from "./ProjectDetails";
import UserDashboard from "./TeamDetails";
import "../components/button/styles.scss";

import Login from "./Login";
import Register from "./Register";
import ForgetPass from "./ForgetPass";
import Roadmap from "./Roadmap";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import InnerToolbox from "./InnerToolbox";
import AboutUs from "./aboutUs";

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
