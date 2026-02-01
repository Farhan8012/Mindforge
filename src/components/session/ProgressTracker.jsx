import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext'

export default function ProgressTracker() {
    const { sessionState, userPreferences } = useApp()
    const progress = sessionState.progress || 0
    const totalChapters = userPreferences.chapters?.length || 1

    return (
        <div className="flex items-center gap-4">
            {/* Progress Bar */}
            <div className="w-32">
                <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-primary-400">{progress}%</span>
                </div>
                <div className="progress-bar">
                    <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Chapters Badge */}
            <div className="px-3 py-1 rounded-full bg-dark-700 border border-gray-700">
                <span className="text-xs text-gray-400">
                    {totalChapters} chapter{totalChapters !== 1 ? 's' : ''}
                </span>
            </div>

            {/* Mastery Indicator */}
            {progress >= 50 && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1"
                >
                    {progress >= 80 ? (
                        <span className="text-yellow-400" title="Expert">🏆</span>
                    ) : progress >= 50 ? (
                        <span className="text-primary-400" title="Learning">📈</span>
                    ) : null}
                </motion.div>
            )}
        </div>
    )
}
