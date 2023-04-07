import {createContext, ReactNode, useContext} from "react";
import {useDisclosure, UseDisclosureReturn} from "@chakra-ui/react";

interface SideBarProviderProps {
    children: ReactNode;
}

type SideBarData = UseDisclosureReturn

const SideBarContext = createContext({} as SideBarData);

export function SideBarProvider({ children}:SideBarProviderProps) {
    const disclosure = useDisclosure();

    return (
        <SideBarContext.Provider value={disclosure}>
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBar = () => useContext(SideBarContext);