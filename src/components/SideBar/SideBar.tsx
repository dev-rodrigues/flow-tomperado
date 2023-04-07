import {
    Box,
    useBreakpointValue,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from "@chakra-ui/react";
import {Navigation} from "../Menu/Navigation";
import {useSideBar} from "../../context/SideBarContext";

export default function SideBar() {

    const {isOpen, onClose} = useSideBar();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="red.600" padding="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <Navigation />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" width={64} marginRight={8}>
            <Navigation />
        </Box>
    )
}