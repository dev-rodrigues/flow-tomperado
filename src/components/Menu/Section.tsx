import {Box, Stack, Text} from "@chakra-ui/react";
import React from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode;
}
export function Section({title, children}: SectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="black" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}