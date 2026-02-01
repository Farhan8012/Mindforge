import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import LandingPage from './pages/LandingPage'
import OnboardingPage from './pages/OnboardingPage'
import TutorPage from './pages/TutorPage'
import SessionPage from './pages/SessionPage'

function App() {
    return (
        <AppProvider>
            <div className="min-h-screen bg-dark-900">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    <Route path="/tutor" element={<TutorPage />} />
                    <Route path="/session" element={<SessionPage />} />
                </Routes>
            </div>
        </AppProvider>
    )
}

export default App
