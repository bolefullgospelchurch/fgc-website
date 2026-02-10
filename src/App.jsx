import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import Ministries from './pages/Ministries'
import Media from './pages/Media'
import About from './pages/About'
import Contact from './pages/Contact'
import Give from './pages/Give'
import Resources from './pages/Resources'
import Registrations from './pages/Registrations'
import RegistrationHomeChurch from './pages/RegistrationHomeChurch'
import RegistrationMembershipForm from './pages/RegistrationMembershipForm'
import RegistrationChooseMinistry from './pages/RegistrationChooseMinistry'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/media" element={<Media />} />
          <Route path="/give" element={<Give />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/registrations/home-church" element={<RegistrationHomeChurch />} />
          <Route path="/registrations/membership-form" element={<RegistrationMembershipForm />} />
          <Route path="/registrations/choose-ministry" element={<RegistrationChooseMinistry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
