import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import routes from "./pages";
import "../src/assets/fonts/font-awesome.css";
import Header from "./components/header";
import Footer from "./components/footer";
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
      <Header />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
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
