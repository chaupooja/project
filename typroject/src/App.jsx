import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageLogin from "./Login";
import Signup from "./Singup";
import Phone from "./component/Phone";
import HeadSet from "./component/HeadSet";
import Error from "./component/Error";
import ChargerSet from "./component/ChargerSet";
import FeaturePhone from "./component/FeaturePhone";
import FeatureChargerSet from "./Feature/FeatureChargerSet";
import FeatureHeadSet from "./Feature/FeatureHeadSet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/smartphone" element={<Phone />} />
        <Route path="/headphone" element={<HeadSet />} />
        <Route path="/myaccount" element={<Error />} />
        <Route path="/charger" element={<ChargerSet />} />
        <Route path="/featurephone" element={<FeaturePhone />} />
        <Route path="/featurecharger" element={<FeatureChargerSet />} />
        <Route path="/featureheadphone" element={<FeatureHeadSet />} />
      </Routes>
    </>
  );
}
export default App;
