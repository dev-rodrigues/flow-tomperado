import {Box, Icon, LinkProps, Text, useBreakpointValue} from "@chakra-ui/react";
import {ElementType} from "react";
import ActiveLink from "./ActiveLink";

interface ItemProps extends LinkProps {
    icon: ElementType;
    children: string;
}

export function Item({icon, children, ...rest}: ItemProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box display="flex">
            <Icon as={icon} color={"black"} fontSize="20"/>
            <ActiveLink display="flex" alignItems="center" transition=".4s" {...rest}>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ActiveLink>
        </Box>

    )
}