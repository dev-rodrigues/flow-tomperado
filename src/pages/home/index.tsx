import 'reactflow/dist/style.css';
import {v4 as uuidv4} from 'uuid';
import {Input} from '@chakra-ui/react'

import {Button, ButtonGroup, Container, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar/SideBar";
import {useEffect, useState} from 'react';
import axios from "axios";

interface Message {
    userName: string;
    message: string;
}

interface MessageConfiguration {
    message: Message;
    createdAt: string;
    delivered: boolean;
}


function Index() {

    const generateUUID = () => uuidv4();

    const [uuid, setUuid] = useState<string>(generateUUID());
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<MessageConfiguration[]>([]);

    useEffect(() => {
        const sse = new EventSource('http://localhost:8080/sse');

        function getRealtimeData(data: MessageConfiguration) {
            console.log(data)
            setMessages(oldValue => [...oldValue, data])
        }

        sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
        sse.onerror = () => {
            // error log here 

            sse.close();
        }
        return () => {
            sse.close();
        };
    }, []);

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8080/message', {
                userName: uuid,
                message: message,
            });

            console.log('Resposta da API:', response.data);

            setMessage('');
        } catch (error) {
            console.error('Erro na chamada da API:', error);
        }
    };


    return (
        <Flex direction="column" height="100vh">
            <Header/>

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="center">
                    <Container
                        padding={["6", "8"]}
                        paddingBottom="4"
                        backgroundColor="gray.800"
                        borderRadius={8}
                    >
                        <label>
                            {uuid}
                        </label>

                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            <ul>
                                {messages.map((message, index) => (
                                    <li key={index}>{message.message.message}</li>
                                ))}
                            </ul>
                        </div>


                        <Container
                            mt={10}
                            display={'flex'}
                            flexDirection={'row'}
                        >

                            <Input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Basic usage'/>

                            <Button
                                onClick={handleSendMessage}
                                colorScheme='blue'>Button</Button>

                        </Container>

                    </Container>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default Index