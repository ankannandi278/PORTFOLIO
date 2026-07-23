import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/layout/ScrollToTop'
import Loader from './components/effects/Loader'
import { useLenis } from './hooks/useLenis'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Journey = lazy(() => import('./pages/Journey'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  useLenis()
  const location = useLocation()

  return (
    <>
      <Loader />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#171B24',
            color: '#E7EAF0',
            border: '1px solid #232838',
          },
        }}
      />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
      <ScrollToTop />
    </>
  )
}
