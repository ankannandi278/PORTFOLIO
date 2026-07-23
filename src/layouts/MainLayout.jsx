import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AmbientBackground from '../components/effects/AmbientBackground'
import CustomCursor from '../components/effects/CustomCursor'
import ScrollProgressBar from '../components/effects/ScrollProgressBar'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-noise">
      <AmbientBackground />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
