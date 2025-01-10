import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route components
import './index.css';
import App from './App.jsx';
import CarWashService from './Components/CarWashService.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Appointment from './Components/Appointment.jsx';
import MechanicalRepairService from './Components/MechanicalRepairService .jsx';
import GeneralServices from './Components/GeneralServices.jsx';
import Contact from './Components/Contact.jsx';
import TiresWheelService from './Components/TiresWheelService.jsx';
import ElectricalRepairService from './Components/ElectricalRepairService.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Aboutus from './Components/Aboutus.jsx';
import Registrationform from './Components/Registrationform.jsx';
import Services from './Components/Services.jsx';
import ServiceContainer from './Components/ServiceContainer.jsx';
import LoginForm from './Components/LoginForm.jsx';
import Cardentingandpainting from './Components/CarDentingandPainting.jsx';
import CarBatteryRepairandServices from './Components/CarBatteryRepairandServices.jsx';
import BodyServices from './Components/BodyServices.jsx';
import Carclutchservices from './Components/carclutchservices.jsx';
import CarACRepairs from './Components/CarAcrepairs.jsx';
import CarsuspenceandFitness from './Components/CarsuspenceandFitness.jsx';
import CarPolishingServices from './Components/CarPolishingServices.jsx';
import CarInspections from './Components/CarInspections.JSX';
import FloatingContactButton from './Components/FloatingContactButton.jsx';
import Customercopy from './Components/Customercopy.jsx';
import Multiform from './Components/Multiform.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/CarWashService" element={<CarWashService />} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/services/MechanicalRepairService" element={<MechanicalRepairService/>} />
        <Route path="/services/GeneralServices" element={<GeneralServices/>} />
        <Route path="/Contact" element={< Contact />} />
        <Route path="/services/TiresWheelService" element={<TiresWheelService />} />
        <Route path="/services/ElectricalRepairService" element={<ElectricalRepairService />} />
        <Route path="/services/Cardentingandpainting" element={<Cardentingandpainting />} />
        <Route path="/services/CarBatteryRepairandServices" element={<CarBatteryRepairandServices />} />
        <Route path="/services/Carclutchservices" element={<Carclutchservices />} />
        <Route path="/services/CarACRepairs" element={<CarACRepairs />} />
        <Route path="/services/CarsuspenceandFitness" element={<CarsuspenceandFitness />} />
        <Route path="/services/CarPolishingServices" element={<CarPolishingServices />} />
        <Route path="/services/CarInspections" element={<CarInspections />} />

        <Route path="/Services" element={<Services />} />
        <Route path="/Customercopy" element={<Customercopy />} />

        <Route path="/Services/BodyServices" element={<BodyServices />} />


        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/ServiceContainer" element={<ServiceContainer />} />
        <Route path="/Registrationform" element={<Registrationform />} />
        <Route path="/Multiform" element={<Multiform />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
      <FloatingContactButton/>
      <Footer/>
    </Router>
  </StrictMode>,
);
