import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
    const [userPreferences, setUserPreferences] = useState({
        level: null,
        subject: null,
        chapters: [],
        learningStyle: 'visual',
        weakAreas: '',
        language: 'english'
    })

    const [selectedTutor, setSelectedTutor] = useState(null)

    const [sessionState, setSessionState] = useState({
        messages: [],
        mindMapNodes: [],
        mindMapEdges: [],
        progress: 0,
        currentTopic: null
    })

    const updatePreferences = (updates) => {
        setUserPreferences(prev => ({ ...prev, ...updates }))
    }

    const addMessage = (message) => {
        setSessionState(prev => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const updateMindMap = (nodes, edges) => {
        setSessionState(prev => ({
            ...prev,
            mindMapNodes: nodes,
            mindMapEdges: edges
        }))
    }

    const updateProgress = (progress) => {
        setSessionState(prev => ({ ...prev, progress }))
    }

    const resetSession = () => {
        setSessionState({
            messages: [],
            mindMapNodes: [],
            mindMapEdges: [],
            progress: 0,
            currentTopic: null
        })
    }

    const value = {
        userPreferences,
        updatePreferences,
        selectedTutor,
        setSelectedTutor,
        sessionState,
        addMessage,
        updateMindMap,
        updateProgress,
        resetSession
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useApp must be used within AppProvider')
    }
    return context
}
