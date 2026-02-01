import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { tutors } from '../data/syllabus'

export default function TutorPage() {
    const navigate = useNavigate()
    const { selectedTutor, setSelectedTutor, userPreferences } = useApp()
    const [customTutor, setCustomTutor] = useState('')
    const [isCustom, setIsCustom] = useState(false)

    const handleSelectTutor = (tutor) => {
        setIsCustom(false)
        setSelectedTutor(tutor)
    }

    const handleCustomTutor = () => {
        if (customTutor.trim()) {
            setIsCustom(true)
            setSelectedTutor({
                id: 'custom',
                name: customTutor,
                tagline: 'Your personalized guide',
                bio: `Learning with ${customTutor}'s unique perspective`,
                avatar: '✨',
                style: 'Personalized teaching style',
                voiceId: 'default'
            })
        }
    }

    const startSession = () => {
        if (selectedTutor) {
            navigate('/session')
        }
    }

    // Filter tutors based on selected subject
    const getRecommendedTutors = () => {
        const subjectMap = {
            'physics': ['einstein', 'feynman', 'kalam'],
            'chemistry': ['curie', 'kalam'],
            'mathematics': ['ramanujan', 'einstein'],
            'biology': ['darwin', 'kalam']
        }
        const recommended = subjectMap[userPreferences.subject] || []
        return tutors.sort((a, b) => {
            const aRec = recommended.includes(a.id) ? -1 : 1
            const bRec = recommended.includes(b.id) ? -1 : 1
            return aRec - bRec
        })
    }

    return (
        <div className="min-h-screen bg-dark-900 relative">
            {/* Background */}
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
                    onClick={() => navigate('/onboarding')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <span>←</span>
                    <span>Back</span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                        <span className="text-sm">🧠</span>
                    </div>
                    <span className="font-display font-bold text-white">MindForge</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 px-8 md:px-16 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Choose Your Intellectual Guide
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg"
                        >
                            Select a legendary mind to guide your learning journey
                        </motion.p>
                    </div>

                    {/* Tutor Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {getRecommendedTutors().map((tutor, index) => (
                            <motion.button
                                key={tutor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onClick={() => handleSelectTutor(tutor)}
                                className={`
                  relative p-6 rounded-2xl text-left transition-all
                  ${selectedTutor?.id === tutor.id && !isCustom
                                        ? 'bg-gradient-to-br from-primary-500/20 to-primary-700/20 border-2 border-primary-500'
                                        : 'glass-card hover:border-primary-500/50'
                                    }
                `}
                            >
                                {/* Avatar */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #1a1a25 0%, #0a0a0f 100%)',
                                            border: '2px solid rgba(139, 92, 246, 0.4)',
                                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)'
                                        }}
                                    >
                                        {tutor.avatar}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{tutor.name}</h3>
                                        <p className="text-primary-400 text-sm">{tutor.subject}</p>
                                    </div>
                                </div>

                                {/* Tagline */}
                                <p className="text-accent-cyan text-sm italic mb-3">"{tutor.tagline}"</p>

                                {/* Bio */}
                                <p className="text-gray-400 text-sm mb-4">{tutor.bio}</p>

                                {/* Teaching style */}
                                <div className="text-xs text-gray-500">
                                    <span className="text-gray-600">Style:</span> {tutor.style}
                                </div>

                                {/* Selected indicator */}
                                {selectedTutor?.id === tutor.id && !isCustom && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center"
                                    >
                                        <span className="text-white">✓</span>
                                    </motion.div>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Custom Tutor Input */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-xl mx-auto mb-10"
                    >
                        <p className="text-gray-400 text-center mb-4">Or create your own...</p>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={customTutor}
                                onChange={(e) => setCustomTutor(e.target.value)}
                                placeholder="Explain like... (e.g., Tony Stark, Sherlock Holmes)"
                                className="flex-1 px-5 py-3 rounded-xl bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                            />
                            <button
                                onClick={handleCustomTutor}
                                className="btn-secondary px-6"
                            >
                                Use
                            </button>
                        </div>
                        {isCustom && selectedTutor && (
                            <p className="text-primary-400 text-sm text-center mt-3">
                                Learning with {selectedTutor.name}'s style ✓
                            </p>
                        )}
                    </motion.div>

                    {/* Start Session Button */}
                    <div className="flex justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            onClick={startSession}
                            disabled={!selectedTutor}
                            className={`
                btn-primary text-lg px-12 py-4 rounded-xl flex items-center gap-3
                ${!selectedTutor ? 'opacity-50 cursor-not-allowed' : ''}
              `}
                        >
                            <span>Start Learning Session</span>
                            <span>🚀</span>
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    )
}
