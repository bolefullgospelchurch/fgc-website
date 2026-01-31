import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import Ministries from './pages/Ministries'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ministries" element={<Ministries />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
