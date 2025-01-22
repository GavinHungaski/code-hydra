import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner/Banner.jsx'
import ChatPage from './pages/ChatPage.jsx'
import ModelsPage from './pages/ModelsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
