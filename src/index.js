import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { url } from "./data/navs";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import { Loading } from "./components/loading";
import { useSelector } from "react-redux/es/hooks/useSelector";
import KalatirthPremium from "./components/kalatirth_premium";
import KalaDham from "./components/kala_dham";
import Formss from "./components/formss";
import Kalasagarskies from "./components/kalasagar_skies";
import Kalakunj from "./components/kala_kunj";
import Kalasquare from "./components/kalasquare";
import Kalasamartheshwar from "./components/kalasamartheshwar";
import KalasagarSkyz from "./components/KalasagarSkyz";

const Home = React.lazy(() => import("./components/home"));
const Contact = React.lazy(() => import("./components/contact"));
const Residential = React.lazy(() => import("./components/residential"));
const ResidentialInner = React.lazy(() =>
  import("./components/residential_inner")
);
const Commercial = React.lazy(() => import("./components/commercial"));
const CommercialInner = React.lazy(() =>
  import("./components/commercial_inner")
);
const About = React.lazy(() => import("./components/about"));
const Error = React.lazy(() => import("./components/error"));

const AppRoutes = () => {
  const navHeight = useSelector((state) => state.app.headerSize);
  const footerHeight = useSelector((state) => state.app.footerSize);
  const path = useLocation().pathname;

  console.log(footerHeight);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [path]);
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: navHeight,
          minHeight: `calc(100vh - ${navHeight}px - ${footerHeight}px)`,
        }}
      >
        <Routes>
          <Route path={url.home} element={<Home />} />
          <Route path={url.contact} element={<Contact />} />
          <Route path={url.about} element={<About />} />
          <Route path={url.residential} element={<Residential />} />
          <Route path={url.residential_inner} element={<ResidentialInner />} />
          <Route path={url.commercial} element={<Commercial />} />
          <Route path={url.commercial_inner} element={<CommercialInner />} />
          <Route path={url.kalatirth_premium} element={<KalatirthPremium />} />
          <Route path={url.kala_dham} element={<KalaDham />} />
          <Route path={url.formss} element={<Formss />} />
          <Route path={url.kalasagar_skies} element={<Kalasagarskies />} />
          <Route path={url.kalasagar_skyz} element={<KalasagarSkyz />} />
          <Route path={url.kala_kunj} element={<Kalakunj />} />
          <Route path={url.kala_Square} element={<Kalasquare />} />
          <Route
            path={url.kala_Samartheshwar}
            element={<Kalasamartheshwar />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
