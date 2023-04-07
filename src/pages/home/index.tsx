import 'reactflow/dist/style.css';
import {Container, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar/SideBar";

function Index() {
    return (
        <Flex direction="column" height="100vh">
            <Header />

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="center">
                    <Container
                        padding={["6", "8"]}
                        paddingBottom="4"
                        backgroundColor="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize={"lg"} mb="4">Board</Text>
                    </Container>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default Index