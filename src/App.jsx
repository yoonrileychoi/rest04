import { Routes, Route, Navigate } from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode.js'
import { useTheme } from './hooks/useTheme.js'
import { AuthProvider } from './contexts/AuthContext.jsx'
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
import Login from './pages/Login.jsx'
import Board from './pages/Board.jsx'
import BoardDetail from './pages/BoardDetail.jsx'
import BoardWrite from './pages/BoardWrite.jsx'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()
  const [theme, setTheme] = useTheme()

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <Header isDark={isDark} setIsDark={setIsDark} theme={theme} setTheme={setTheme} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Navigate to="/videos/fashion" replace />} />
            <Route path="/videos/:subject" element={<Videos />} />
            <Route path="/workbook" element={<Navigate to="/workbook/fashion" replace />} />
            <Route path="/workbook/:subject" element={<Workbook />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/about" element={<Navigate to="/about/company" replace />} />
            <Route path="/about/:tab" element={<About />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/board" element={<Navigate to="/board/free" replace />} />
            <Route path="/board/write" element={<BoardWrite />} />
            <Route path="/board/edit/:id" element={<BoardWrite />} />
            <Route path="/board/:category" element={<Board />} />
            <Route path="/board/:category/:id" element={<BoardDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </AuthProvider>
  )
}
