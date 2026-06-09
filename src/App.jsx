import { Routes, Route, Navigate } from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import Home from './pages/Home.jsx'
import Videos from './pages/Videos.jsx'
import Workbook from './pages/Workbook.jsx'
import Programs from './pages/Programs.jsx'
import About from './pages/About.jsx'
import Guide from './pages/Guide.jsx'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Navigate to="/videos/math" replace />} />
          <Route path="/videos/:subject" element={<Videos />} />
          <Route path="/workbook" element={<Navigate to="/workbook/math" replace />} />
          <Route path="/workbook/:subject" element={<Workbook />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<Navigate to="/about/company" replace />} />
          <Route path="/about/:tab" element={<About />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
