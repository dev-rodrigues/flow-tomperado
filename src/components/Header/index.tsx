import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react';
import {RiMenuLine} from "react-icons/all";
import {Logo} from "../Logo/Logo";
import {useSideBar} from "../../context/SideBarContext";
export default function Header() {

    const { onOpen } = useSideBar();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex as="header"
              width="100%"
              height="20"
              maxWidth={1480}
              marginX="auto"
              paddingX="6"
              background={"red.500"}
              marginTop="0.3"
              align="center" >

            { !isWideVersion && (
                <IconButton
                    aria-label="Abrir menu"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                </IconButton>
            )}
            <Logo />
        </Flex>
    )
}