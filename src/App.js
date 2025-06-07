import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import routes from "./pages";
import "../src/assets/fonts/font-awesome.css";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/header"));
const Footer = lazy(() => import("./components/footer"));
import "./scss/component/_section.scss";
import "./scss/component/_box.scss";
import "./scss/component/_tf-section.scss";
import "./scss/component/_reponsive.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.component} exact />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
}

function NotFound() {
  return (
    <div className="inner-page custom-section d-flex justify-content-center" style={{margin: "200px 0"}}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default App;
