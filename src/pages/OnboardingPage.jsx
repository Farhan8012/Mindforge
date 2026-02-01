import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'
import LevelSelector from '../components/onboarding/LevelSelector'
import ChapterSelector from '../components/onboarding/ChapterSelector'
import PreferencesForm from '../components/onboarding/PreferencesForm'

const steps = [
    { id: 1, title: 'Level', description: 'Choose your education level' },
    { id: 2, title: 'Chapters', description: 'Select topics to learn' },
    { id: 3, title: 'Preferences', description: 'Customize your experience' }
]

export default function OnboardingPage() {
    const navigate = useNavigate()
    const { userPreferences, updatePreferences } = useApp()
    const [currentStep, setCurrentStep] = useState(1)

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        } else {
            navigate('/tutor')
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        } else {
            navigate('/')
        }
    }

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return userPreferences.level !== null
            case 2:
                return userPreferences.subject !== null && userPreferences.chapters.length > 0
            case 3:
                return true
            default:
                return false
        }
    }

    return (
        <div className="min-h-screen bg-dark-900 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-mesh-gradient" />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
                }}
            />

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
                <button
                    onClick={prevStep}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <span>←</span>
                    <span>{currentStep === 1 ? 'Back to Home' : 'Back'}</span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                        <span className="text-sm">🧠</span>
                    </div>
                    <span className="font-display font-bold text-white">MindForge</span>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="relative z-10 px-8 md:px-16 mt-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-2">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${currentStep >= step.id
                                        ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                                        : 'bg-dark-700 text-gray-500'
                                    }
                `}>
                                    {currentStep > step.id ? '✓' : step.id}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`
                    w-24 md:w-32 h-1 mx-2 rounded-full transition-all
                    ${currentStep > step.id ? 'bg-primary-500' : 'bg-dark-700'}
                  `} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-sm">
                        {steps.map(step => (
                            <span
                                key={step.id}
                                className={currentStep >= step.id ? 'text-white' : 'text-gray-500'}
                            >
                                {step.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="relative z-10 px-8 md:px-16 py-12">
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentStep === 1 && (
                                <div className="text-center mb-12">
                                    <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                        What's your level?
                                    </h1>
                                    <p className="text-gray-400 text-lg">
                                        Choose your current education level to personalize your learning experience
                                    </p>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="text-center mb-12">
                                    <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                        Select your chapters
                                    </h1>
                                    <p className="text-gray-400 text-lg">
                                        Pick the subjects and topics you want to master
                                    </p>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="text-center mb-12">
                                    <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                        Customize your learning
                                    </h1>
                                    <p className="text-gray-400 text-lg">
                                        Tell us how you learn best so we can adapt to you
                                    </p>
                                </div>
                            )}

                            {/* Step Content */}
                            {currentStep === 1 && <LevelSelector />}
                            {currentStep === 2 && <ChapterSelector />}
                            {currentStep === 3 && <PreferencesForm />}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className={`
                btn-primary text-lg px-12 py-4 rounded-xl flex items-center gap-2
                ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
              `}
                        >
                            <span>{currentStep === 3 ? 'Choose Your Tutor' : 'Continue'}</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
