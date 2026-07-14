import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LeasingServices from './pages/LeasingServices'
import Privacy from './pages/Privacy'
import PropertyManagement from './pages/PropertyManagement'
import RentalAppraisals from './pages/RentalAppraisals'
import Testimonials from './pages/Testimonials'
import WhyChooseUS from './pages/WhyChooseUS'
import ForLease from './pages/ForLease'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/for-lease" element={<ForLease />} />
        <Route path="/leasing-services" element={<LeasingServices />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/property-management" element={<PropertyManagement />} />
        <Route path="/rental-appraisals" element={<RentalAppraisals />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/why-choose-us" element={<WhyChooseUS />} />
      </Route>
    </Routes>
  )
}

export default App
