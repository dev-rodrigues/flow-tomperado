import {Handle, NodeProps, Position} from "reactflow";
import {FaCog, FaTrash} from "react-icons/fa";
import {TriggerDialog} from "./dialog/TriggerDialog";
import {useState} from "react";
import {HStack, useToast} from "@chakra-ui/react";

export type TriggerData = {
    type: string;
    apiName: string;
}

export function Trigger({
}: NodeProps) {

    const [showTrash, setShowTrash] = useState(false);
    const [isTriggerDialogOpen, setIsTriggerDialogOpen] = useState(false);
    const [triggerData, setTriggerData] = useState<TriggerData>({
        type: '',
        apiName: '',
    });

    const toast = useToast()

    function handleCloseTriggerDialog() {
        setIsTriggerDialogOpen(false);
    }

    function handleSetTriggerData(type: string, apiName: string) {
        setTriggerData({
            type,
            apiName,
        });
    }

    return (
        <div
            onMouseEnter={() => {
                console.log("should show trash");
                setShowTrash(true);
            }}
            onMouseLeave={() =>{
                console.log("should hide trash");
                setShowTrash(false);
            }}
            onDragEnter={() => {
            }}
            className={"bg-red-500 rounded w-full h-full min-w-[150px] min-h-[100px] p-1"}
             style={{
                    border: "1px solid #fafafa",
                    boxShadow: "0 0 10px 1px rgba(0,0,0,0.1)",
             }}
        >
            <div className="flex justify-center">
                <span style={{
                    fontWeight: "bold",
                }}>TRIGGER</span>
            </div>

            <div className="flex justify-end">
                <span
                    className="mt-3 mr-2"
                    style={{
                        padding: "1px 5px",
                    }}
                >start</span>
            </div>

            <div className="flex justify-center">
                <span style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#fafafa",
                }}>{triggerData ? triggerData.type : ""}</span>
            </div>

            <HStack display="flex" justifyContent="center" mt="15px">

                <button
                    onClick={() => setIsTriggerDialogOpen(true)}
                    className="p-2 rounded-full bg-gray-600 hover:bg-gray-700"
                >
                    <FaCog/>
                </button>

                {showTrash && (
                    <button
                        onClick={() => {
                            toast({
                                position: 'top',
                                title: "Trigger deleted.",
                                status: "warning",
                                duration: 2000,
                                isClosable: true,
                            })
                        }}
                        className="p-2 rounded-full bg-gray-600 hover:bg-gray-700"
                    >
                        <FaTrash/>
                    </button>
                )}

            </HStack>

            <Handle
                id={"right"}
                type="source"
                position={Position.Right}
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />
            <TriggerDialog
                data={triggerData}
                isOpen={isTriggerDialogOpen}
                onRequestClose={handleCloseTriggerDialog}
                onRequestSave={handleSetTriggerData}
            />
        </div>
    );
}