import {Handle, NodeProps, Position} from "reactflow";
import {FaCog} from "react-icons/fa";
import {TriggerDialog} from "./dialog/TriggerDialog";
import {useEffect, useState} from "react";

export interface TriggerData {
    type: string;
    apiName: string;
}

export function Trigger({}: NodeProps) {

    const [isTriggerDialogOpen, setIsTriggerDialogOpen] = useState(false);
    const [triggerData, setTriggerData] = useState<TriggerData>({
        type: '',
        apiName: '',
    });

    function handleCloseTriggerDialog() {
        setIsTriggerDialogOpen(false);
    }

    function handleSetTriggerData(type: string, apiName: string) {
        setTriggerData({
            type,
            apiName,
        });
    }

    useEffect(() => {
        console.log(triggerData);
    }, [triggerData]);

    return <>
        <div className={"bg-pink-500 rounded w-full h-full min-w-[150px] min-h-[100px] p-1"}>
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

            <div className="flex justify-center items-center h-full">
                <button
                    onClick={() => setIsTriggerDialogOpen(true)}
                    className="p-2 rounded-full bg-gray-600 hover:bg-gray-700"
                >
                    <FaCog/>
                </button>
            </div>


            <Handle
                id={"right"}
                type="source"
                position={Position.Right}
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />
            <TriggerDialog
                isOpen={isTriggerDialogOpen}
                onRequestClose={handleCloseTriggerDialog}
                onRequestSave={handleSetTriggerData}
            />
        </div>

    </>
}