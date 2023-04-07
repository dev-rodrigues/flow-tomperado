import {Link, LinkProps, useBreakpointValue} from "@chakra-ui/react";
import {cloneElement, ReactElement} from "react";
import {useLocation} from "react-router-dom";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
}

export default function ActiveLink({children, ...rest}: ActiveLinkProps) {
    let isActive = false;
    const localization = useLocation().pathname;

    if (localization === rest.href || localization === rest.as ){
        isActive = true;
    }

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: "gray.800",
            })}
        </Link>
    )
}