import ReactFlow, {
    addEdge,
    Background,
    Connection,
    ConnectionMode,
    Controls,
    Node,
    useEdgesState,
    useNodesState
} from "reactflow";
import { zinc } from "tailwindcss/colors"

import 'reactflow/dist/style.css';

import {Square} from "./components/node/Square";
import {useCallback} from "react";

const NODE_TYPES = {
    square: Square
}

const INITIAL_ELEMENTS = [
    {
        id: crypto.randomUUID(),
        type: 'square',
        position: {x: 200, y: 400},
        data: {}
    },
    {
        id: crypto.randomUUID(),
        type: 'square',
        position: {x: 1000, y: 400},
        data: {}
    }
] satisfies Node[]

function App() {

    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_ELEMENTS)

    const onConnect = useCallback((connection: Connection) => {
        return setEdges(edges => addEdge(connection, edges))
    }, [])

    return (
        <div className="w-screen h-screen">
            <ReactFlow
                nodeTypes={NODE_TYPES}
                nodes={nodes}
                connectionMode={ConnectionMode.Loose}
                edges={edges}
                onConnect={onConnect}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
            >
                <Background
                    gap={12}
                    size={2}
                    color={zinc[200]}
                />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default App
