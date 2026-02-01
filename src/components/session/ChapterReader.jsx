import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useApp } from '../../context/AppContext'
import { getChapterContent } from '../../data/chapterContent'

export default function ChapterReader({ onAskDoubt }) {
    const { userPreferences } = useApp()
    const [activeSection, setActiveSection] = useState(0)
    const [showQuestions, setShowQuestions] = useState(false)
    const contentRef = useRef(null)

    const chapter = userPreferences.chapters?.[0]
    const content = getChapterContent(chapter?.chapterName)

    if (!content) {
        return (
            <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center p-8">
                    <span className="text-4xl mb-4 block">📚</span>
                    <p>No detailed content available for this chapter yet.</p>
                    <p className="text-sm mt-2">Start chatting with your tutor to learn!</p>
                </div>
            </div>
        )
    }

    const handleHighlightAndAsk = () => {
        const selection = window.getSelection()
        const selectedText = selection.toString().trim()
        if (selectedText && onAskDoubt) {
            onAskDoubt(`I have a doubt about this part: "${selectedText}". Can you explain it in more detail?`)
        }
    }

    const scrollToSection = (index) => {
        setActiveSection(index)
        contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="h-full flex flex-col bg-dark-900">
            {/* Chapter Header */}
            <div className="flex-shrink-0 p-6 border-b border-gray-800/50">
                <h1 className="text-2xl font-display font-bold text-white mb-2">
                    {chapter?.chapterName}
                </h1>
                <p className="text-gray-400">{content.introduction.slice(0, 150)}...</p>
            </div>

            {/* Section Navigation */}
            <div className="flex-shrink-0 p-4 border-b border-gray-800/50 overflow-x-auto">
                <div className="flex gap-2">
                    {content.sections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(index)}
                            className={`
                px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all
                ${activeSection === index
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
                                }
              `}
                        >
                            {index + 1}. {section.title}
                        </button>
                    ))}
                    <button
                        onClick={() => setShowQuestions(!showQuestions)}
                        className={`
              px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all
              ${showQuestions
                                ? 'bg-accent-cyan text-dark-900'
                                : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
                            }
            `}
                    >
                        📝 Practice Questions
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div
                ref={contentRef}
                className="flex-1 overflow-y-auto p-6"
                onMouseUp={handleHighlightAndAsk}
            >
                <AnimatePresence mode="wait">
                    {showQuestions ? (
                        <motion.div
                            key="questions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <h2 className="text-xl font-semibold text-white mb-4">Practice Questions</h2>
                            {content.practiceQuestions.map((q, i) => (
                                <PracticeQuestion key={i} question={q} index={i} onAskDoubt={onAskDoubt} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-3xl"
                        >
                            <SectionContent
                                section={content.sections[activeSection]}
                                onAskDoubt={onAskDoubt}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Help Footer */}
            <div className="flex-shrink-0 p-4 border-t border-gray-800/50 bg-dark-800/50">
                <p className="text-gray-500 text-sm text-center">
                    💡 <span className="text-primary-400">Tip:</span> Select any text and ask your tutor to explain it!
                </p>
            </div>
        </div>
    )
}

function SectionContent({ section, onAskDoubt }) {
    return (
        <div className="space-y-6">
            {/* Section Title */}
            <h2 className="text-2xl font-display font-bold gradient-text mb-6">
                {section.title}
            </h2>

            {/* Main Content */}
            <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h1 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-lg font-medium text-primary-400 mt-4 mb-2">{children}</h3>,
                        p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
                        strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                        em: ({ children }) => <em className="text-primary-300">{children}</em>,
                        ul: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">{children}</ol>,
                        li: ({ children }) => <li className="text-gray-300">{children}</li>,
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-500/10 rounded-r">
                                {children}
                            </blockquote>
                        ),
                        code: ({ children }) => (
                            <code className="bg-dark-700 px-2 py-1 rounded text-accent-cyan text-sm">{children}</code>
                        ),
                        table: ({ children }) => (
                            <div className="overflow-x-auto my-4">
                                <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
                                    {children}
                                </table>
                            </div>
                        ),
                        thead: ({ children }) => <thead className="bg-primary-500/20">{children}</thead>,
                        th: ({ children }) => <th className="px-4 py-2 text-left text-white font-semibold border-b border-gray-700">{children}</th>,
                        td: ({ children }) => <td className="px-4 py-2 text-gray-300 border-b border-gray-800">{children}</td>,
                    }}
                >
                    {section.content}
                </ReactMarkdown>
            </div>

            {/* Key Points */}
            {section.keyPoints && (
                <div className="glass-card p-6 rounded-xl mt-8">
                    <h4 className="text-lg font-semibold text-accent-cyan mb-4 flex items-center gap-2">
                        <span>💡</span> Key Points to Remember
                    </h4>
                    <ul className="space-y-3">
                        {section.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-primary-400 mt-1">✓</span>
                                <span className="text-gray-300">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Formulas */}
            {section.formulas && section.formulas.length > 0 && (
                <div className="glass-card p-6 rounded-xl mt-6">
                    <h4 className="text-lg font-semibold text-primary-400 mb-4 flex items-center gap-2">
                        <span>📐</span> Important Formulas
                    </h4>
                    <div className="grid gap-4">
                        {section.formulas.map((formula, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between p-4 bg-dark-700 rounded-lg"
                            >
                                <div>
                                    <span className="text-gray-400 text-sm">{formula.name}</span>
                                    <div className="text-xl font-mono text-white mt-1">{formula.formula}</div>
                                </div>
                                {formula.unit && (
                                    <span className="text-gray-500 text-sm">{formula.unit}</span>
                                )}
                                <button
                                    onClick={() => onAskDoubt && onAskDoubt(`Explain the formula ${formula.name}: ${formula.formula}. When do I use it and how?`)}
                                    className="px-3 py-1 rounded bg-primary-500/20 text-primary-400 text-sm hover:bg-primary-500/30 transition-colors"
                                >
                                    Ask about this
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

function PracticeQuestion({ question, index, onAskDoubt }) {
    const [showHint, setShowHint] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')

    const checkAnswer = () => {
        if (onAskDoubt) {
            onAskDoubt(`I tried answering this question:\n\n"${question.question}"\n\nMy answer: "${userAnswer}"\n\nIs my answer correct? Please explain.`)
        }
    }

    return (
        <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                    <p className="text-white font-medium mb-4">{question.question}</p>

                    {/* User Input */}
                    <div className="mb-4">
                        <textarea
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Type your answer here..."
                            className="w-full p-3 rounded-lg bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none resize-none"
                            rows={2}
                        />
                        <button
                            onClick={checkAnswer}
                            disabled={!userAnswer.trim()}
                            className={`
                mt-2 px-4 py-2 rounded-lg text-sm transition-all
                ${userAnswer.trim()
                                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                                    : 'bg-dark-600 text-gray-500 cursor-not-allowed'
                                }
              `}
                        >
                            Check My Answer
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowHint(!showHint)}
                            className="px-4 py-2 rounded-lg text-sm bg-dark-700 text-gray-300 hover:text-white hover:bg-dark-600 transition-all"
                        >
                            {showHint ? 'Hide Hint' : '💡 Show Hint'}
                        </button>
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="px-4 py-2 rounded-lg text-sm bg-dark-700 text-gray-300 hover:text-white hover:bg-dark-600 transition-all"
                        >
                            {showAnswer ? 'Hide Answer' : '✓ Show Answer'}
                        </button>
                        <button
                            onClick={() => onAskDoubt && onAskDoubt(`Please explain how to solve this step by step: "${question.question}"`)}
                            className="px-4 py-2 rounded-lg text-sm bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 transition-all"
                        >
                            🙋 Ask Tutor
                        </button>
                    </div>

                    {/* Hint */}
                    <AnimatePresence>
                        {showHint && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30"
                            >
                                <p className="text-yellow-400 text-sm">
                                    <strong>💡 Hint:</strong> {question.hint}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Answer */}
                    <AnimatePresence>
                        {showAnswer && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30"
                            >
                                <p className="text-green-400 text-sm">
                                    <strong>✓ Answer:</strong> {question.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
