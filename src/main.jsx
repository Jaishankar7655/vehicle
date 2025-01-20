import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Import BrowserRouter and Route components
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Appointment from "./Components/Appointment.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Registrationform from "./Components/Registrationform.jsx";
import Services from "./Components/Services.jsx";
import CarServices from "./Components/CarServices.jsx";
import BodyServices from "./Components/BodyServices.jsx";
import FloatingContactButton from "./Components/FloatingContactButton.jsx";
import Multiform from "./Components/Multiform.jsx";

import SmallSizeCar from "./Components/SmallSizeCar.jsx";
import MediumSizecar from "./Components/MediumSizecar.jsx";
import LargeSizeCar from "./Components/LargeSizeCar.jsx";
import Fullbodypaint from "./Components/Fullbodypaint.jsx";
import Blogdescription from "./Components/Blogdescription.jsx";

import Customercopy from "./Components/Customercopy.jsx";

// ScrollToTop Component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return null;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop /> {/* Ensure this is included inside Router */}
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Customercopy" element={<Customercopy />} />
        <Route path="/Services/BodyServices" element={<BodyServices />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Servies/CarServices" element={<CarServices />} />
        <Route path="/Servies/CarServices/SmallSizeCar" element={<SmallSizeCar />} />
        <Route path="/Servies/Fullbodypaint" element={<Fullbodypaint />} />
        <Route path="/Servies/CarServices/MediumSizecar" element={<MediumSizecar />} />
        <Route path="/Servies/CarServices/LargeSizeCar" element={<LargeSizeCar />} />
        <Route path="/Registrationform" element={<Registrationform />} />
        <Route path="/Blogdescription" element={<Blogdescription />} />
        <Route path="/Multiform" element={<Multiform />} />
      </Routes>
      <FloatingContactButton />
      <Footer />
    </Router>
  </StrictMode>
);
