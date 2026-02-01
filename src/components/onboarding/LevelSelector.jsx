import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'
import { levels } from '../../data/syllabus'

export default function LevelSelector() {
    const { userPreferences, updatePreferences } = useApp()

    const handleSelectLevel = (level) => {
        updatePreferences({
            level: level.id,
            // Reset subject and chapters when level changes
            subject: null,
            chapters: []
        })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {levels.map((level, index) => (
                <motion.button
                    key={level.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => handleSelectLevel(level)}
                    className={`
            selection-card text-left p-8 transition-all
            ${userPreferences.level === level.id ? 'selected' : ''}
          `}
                >
                    <div className="text-4xl mb-4">{level.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{level.name}</h3>
                    <p className="text-gray-400 text-sm">{level.description}</p>

                    {userPreferences.level === level.id && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center"
                        >
                            <span className="text-white text-sm">✓</span>
                        </motion.div>
                    )}
                </motion.button>
            ))}
        </div>
    )
}
