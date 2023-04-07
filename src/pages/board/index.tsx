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
import {zinc} from "tailwindcss/colors"
import {DefaultEdge} from "../../components/Edges/DefaultEdge";
import {Trigger} from "../../components/node/Trigger";
import {useCallback} from "react";
import {Flex, SimpleGrid} from "@chakra-ui/react";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar/SideBar";

const NODE_TYPES = {
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
        return setEdges(edges => addEdge(connection, edges))
    }, [setEdges])

    function getCenterOfScreen(): { x: number, y: number } {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        return {x: centerX, y: centerY};
    }

    function addTrigger() {
        setNodes(nodes => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type: 'trigger',
                position: getCenterOfScreen(),
                data: {},
            }
        ])
    }

    return (
        <Flex direction="column" height="100vh">
            <Header/>

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="center">
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
                            <Controls/>
                        </ReactFlow>

                        <Toolbar.Root
                            className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-21 w-96 overflow-hidden">
                            <Toolbar.Button
                                onClick={addTrigger}
                                className="w-32 h-31 bg-red-500 mt-5 rounded transition-transform hover:-translate-y-2"
                            >
                                <p>Add trigger</p>
                            </Toolbar.Button>
                        </Toolbar.Root>
                    </div>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default Index