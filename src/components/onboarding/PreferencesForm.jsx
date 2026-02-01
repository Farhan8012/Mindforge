import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'

const learningStyles = [
    { id: 'visual', name: 'Visual', icon: '👁️', description: 'Diagrams, animations, and mind maps' },
    { id: 'auditory', name: 'Auditory', icon: '🎧', description: 'Voice explanations and discussions' },
    { id: 'step-by-step', name: 'Step-by-Step', icon: '📝', description: 'Detailed breakdowns and examples' },
    { id: 'conceptual', name: 'Conceptual', icon: '💡', description: 'Big picture understanding first' }
]

const languages = [
    { id: 'english', name: 'English', native: 'English' },
    { id: 'hindi', name: 'Hindi', native: 'हिंदी' },
    { id: 'telugu', name: 'Telugu', native: 'తెలుగు' }
]

export default function PreferencesForm() {
    const { userPreferences, updatePreferences } = useApp()

    return (
        <div className="max-w-2xl mx-auto space-y-10">
            {/* Learning Style */}
            <div>
                <h3 className="text-lg font-medium text-gray-300 mb-4">How do you learn best?</h3>
                <div className="grid grid-cols-2 gap-4">
                    {learningStyles.map((style, index) => (
                        <motion.button
                            key={style.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => updatePreferences({ learningStyle: style.id })}
                            className={`
                p-5 rounded-xl text-left transition-all
                ${userPreferences.learningStyle === style.id
                                    ? 'bg-gradient-to-r from-primary-500/20 to-primary-700/20 border-2 border-primary-500'
                                    : 'glass-card'
                                }
              `}
                        >
                            <span className="text-3xl">{style.icon}</span>
                            <h4 className="font-semibold text-white mt-3 mb-1">{style.name}</h4>
                            <p className="text-gray-400 text-sm">{style.description}</p>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Language Preference */}
            <div>
                <h3 className="text-lg font-medium text-gray-300 mb-4">Preferred language</h3>
                <div className="flex gap-4">
                    {languages.map((lang, index) => (
                        <motion.button
                            key={lang.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => updatePreferences({ language: lang.id })}
                            className={`
                px-6 py-3 rounded-xl transition-all flex-1
                ${userPreferences.language === lang.id
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white'
                                    : 'glass-card'
                                }
              `}
                        >
                            <div className="font-medium">{lang.name}</div>
                            <div className="text-sm opacity-70">{lang.native}</div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Weak Areas */}
            <div>
                <h3 className="text-lg font-medium text-gray-300 mb-4">
                    Any topics you find challenging? <span className="text-gray-500">(optional)</span>
                </h3>
                <textarea
                    value={userPreferences.weakAreas || ''}
                    onChange={(e) => updatePreferences({ weakAreas: e.target.value })}
                    placeholder="e.g., Integration techniques, Organic chemistry mechanisms, Electromagnetism..."
                    className="w-full p-4 rounded-xl bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none resize-none h-32 transition-colors"
                />
                <p className="text-gray-500 text-sm mt-2">
                    Your tutor will pay extra attention to these areas
                </p>
            </div>

            {/* Summary */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6 rounded-xl"
            >
                <h4 className="font-medium text-primary-400 mb-3">Your Learning Profile</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-500">Style:</span>
                        <span className="text-white ml-2">
                            {learningStyles.find(s => s.id === userPreferences.learningStyle)?.name || 'Visual'}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-500">Language:</span>
                        <span className="text-white ml-2">
                            {languages.find(l => l.id === userPreferences.language)?.name || 'English'}
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-gray-500">Chapters:</span>
                        <span className="text-white ml-2">
                            {userPreferences.chapters?.length || 0} selected
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
