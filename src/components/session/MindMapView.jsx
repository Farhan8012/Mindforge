import { useCallback, useEffect } from 'react'
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    MiniMap
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useApp } from '../../context/AppContext'

// Custom node styles
const nodeStyles = {
    central: {
        background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 24px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
    },
    default: {
        background: 'linear-gradient(135deg, rgba(26, 26, 37, 0.9) 0%, rgba(18, 18, 26, 0.95) 100%)',
        color: 'white',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        borderRadius: '10px',
        padding: '12px 18px',
        fontSize: '12px',
        fontWeight: '500'
    },
    subtopic: {
        background: 'rgba(26, 26, 37, 0.8)',
        color: '#d1d5db',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '8px',
        padding: '8px 14px',
        fontSize: '11px'
    }
}

const defaultViewport = { x: 100, y: 50, zoom: 0.8 }

export default function MindMapView() {
    const { sessionState, userPreferences } = useApp()
    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    // Initialize with chapter data or session state
    useEffect(() => {
        if (sessionState.mindMapNodes.length > 0) {
            // Use nodes from session state (from Gemini)
            const styledNodes = sessionState.mindMapNodes.map((node, index) => ({
                ...node,
                style: index === 0 ? nodeStyles.central : nodeStyles.default
            }))
            setNodes(styledNodes)
            setEdges(sessionState.mindMapEdges)
        } else if (userPreferences.chapters?.[0]) {
            // Generate default mind map from chapter
            const chapter = userPreferences.chapters[0]
            generateDefaultMindMap(chapter)
        }
    }, [sessionState.mindMapNodes, sessionState.mindMapEdges, userPreferences.chapters])

    const generateDefaultMindMap = (chapter) => {
        const centerX = 300
        const centerY = 250
        const radius = 180

        // Central node
        const centralNode = {
            id: 'central',
            type: 'default',
            data: { label: chapter.chapterName },
            position: { x: centerX, y: centerY },
            style: nodeStyles.central
        }

        // Subtopic nodes arranged in a circle
        const subtopicNodes = chapter.subtopics.slice(0, 8).map((topic, index) => {
            const angle = (index / Math.min(chapter.subtopics.length, 8)) * 2 * Math.PI - Math.PI / 2
            return {
                id: `subtopic-${index}`,
                type: 'default',
                data: { label: topic },
                position: {
                    x: centerX + Math.cos(angle) * radius,
                    y: centerY + Math.sin(angle) * radius
                },
                style: nodeStyles.default
            }
        })

        // Edges
        const newEdges = subtopicNodes.map((node) => ({
            id: `edge-${node.id}`,
            source: 'central',
            target: node.id,
            style: { stroke: 'rgba(139, 92, 246, 0.5)', strokeWidth: 2 },
            animated: true
        }))

        setNodes([centralNode, ...subtopicNodes])
        setEdges(newEdges)
    }

    return (
        <div className="w-full h-full bg-dark-800">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                defaultViewport={defaultViewport}
                fitView
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
            >
                <Background
                    color="rgba(139, 92, 246, 0.1)"
                    gap={20}
                    size={1}
                />
                <Controls
                    style={{
                        background: 'rgba(26, 26, 37, 0.9)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '8px'
                    }}
                />
                <MiniMap
                    nodeColor={(node) => {
                        if (node.id === 'central') return '#8b5cf6'
                        return 'rgba(139, 92, 246, 0.5)'
                    }}
                    maskColor="rgba(10, 10, 15, 0.8)"
                    style={{
                        background: 'rgba(26, 26, 37, 0.9)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '8px'
                    }}
                />
            </ReactFlow>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass-card p-3 rounded-lg text-xs">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-primary-500"></div>
                        <span className="text-gray-400">Main Topic</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded border border-primary-500/50"></div>
                        <span className="text-gray-400">Subtopics</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
