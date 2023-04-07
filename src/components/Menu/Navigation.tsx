import {Button, Divider, Icon, Stack} from "@chakra-ui/react";
import {RiDashboardLine, BiExit, BiHome} from "react-icons/all";
import {Section} from "./Section";
import {Item} from "./Item";

export function Navigation() {
    return (
        <>
            <Stack spacing="12" align="flex-start">
                <Section title="GERAL">
                    <Item icon={BiHome} href="/">Home</Item>
                    <Item icon={RiDashboardLine} href="/board">Board</Item>
                </Section>

            </Stack>

            <Divider my="6" borderColor="gray.700"/>

            <Section>
                <Button
                    bg={"gray.500"}
                    leftIcon={<Icon as={BiExit} size="20px" />}>
                    Exit
                </Button>
            </Section>
        </>
    )
}