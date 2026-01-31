import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import EventsPage from './components/EventsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
