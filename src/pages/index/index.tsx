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
import * as Toolbar from "@radix-ui/react-toolbar";

import { zinc } from "tailwindcss/colors"

import 'reactflow/dist/style.css';
import {Square} from "../../components/node/Square";
import {Trigger} from "../../components/node/Trigger";
import {DefaultEdge} from "../../components/edges/DefaultEdge";
import {useCallback} from "react";

const NODE_TYPES = {
    square: Square,
    trigger: Trigger
}

const INITIAL_ELEMENTS = [] satisfies Node[]

const EDGE_TYPES = {
    default: DefaultEdge
}

function Index() {

    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_ELEMENTS)

    const onConnect = useCallback((connection: Connection) => {
        console.log(nodes)
        return setEdges(edges => addEdge(connection, edges))
    }, [])

    function addSquaredNode(){
        setNodes(nodes => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type: 'square',
                position: {x: 750, y: 350},
                data: {},
            }
        ])
    }

    function addSquaredTrigger(){
        setNodes(nodes => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type: 'trigger',
                position: {x: 750, y: 350},
                data: {},
            }
        ])
    }

    return (
        <div className="w-screen h-screen">
            <ReactFlow
                nodeTypes={NODE_TYPES}
                edgeTypes={EDGE_TYPES}
                nodes={nodes}
                connectionMode={ConnectionMode.Loose}
                edges={edges}
                onConnect={onConnect}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
                defaultEdgeOptions={{
                    type: 'default',
                }}
            >
                <Background
                    gap={12}
                    size={2}
                    color={zinc[200]}
                />
                <Controls />
            </ReactFlow>

            <Toolbar.Root
                className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
                <Toolbar.Button
                    onClick={addSquaredTrigger}
                    className="w-32 h-32 bg-pink-500 mt-6 rounded transition-transform hover:-translate-y-4"
                >
                    <p>Add trigger</p>
                </Toolbar.Button>
            </Toolbar.Root>

            {/*<Toolbar.Root*/}
            {/*    className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">*/}
            {/*    <Toolbar.Button*/}
            {/*        onClick={addSquaredNode}*/}
            {/*        className="w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2"*/}
            {/*    />*/}
            {/*</Toolbar.Root>*/}

        </div>
    )
}

export default Index