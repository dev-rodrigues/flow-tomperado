import {FormEvent, useState} from "react";
import Modal from 'react-modal';
import {
    Box,
    Divider,
    Flex,
    FormControl,
    Heading,
    FormLabel,
    SimpleGrid,
    VStack,
    Select,
    HStack, Button, useToast
} from "@chakra-ui/react";
import {FaRegTimesCircle, MdArrowDropDown} from "react-icons/all";

import {Input} from "../../Form/Input";
import {TriggerData} from "../Trigger";

interface Props {
    data: TriggerData,
    isOpen: boolean;
    onRequestClose: () => void;
    onRequestSave: (type: string, apiName: string) => void;
}

export function TriggerDialog({
                                  data,
                                  isOpen,
                                  onRequestClose,
                                  onRequestSave
                              }: Props) {

    const toast = useToast()

    const [formData, setFormData] = useState<TriggerData>({
        type: data.type ? data.type : '',
        apiName: data.apiName ? data.apiName : '',
    })

    const handleSaveSubmit = (e: FormEvent) => {
        e.preventDefault();

        const errors = isInvalidForm()

        if (errors.length > 0) {
            errors.forEach(it => {
                toast({
                    position: 'top-right',
                    title: 'Validation error',
                    status: 'error',
                    duration: 2000,
                    isClosable: false,
                    description: it,
                })
            })
            return
        }

        onRequestSave(formData.type, formData.apiName);
        onRequestClose();
    }

    function isInvalidForm(): string[] {
        let errors: string[] = []

        if (formData.apiName === '') {
            errors.push('O nome da API é obrigatório')
        }
        if (formData.type === '') {
            errors.push('O tipo da API é obrigatório')
        }
        return errors
    }

    return (
        <Modal
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >

            <Flex justify="flex-end">
                <button
                    type="button"
                    onClick={onRequestClose}
                >
                    <FaRegTimesCircle size={25} color="black"/>
                </button>
            </Flex>

            <Box
                as="form"
                mt="8"
                flex="1"
                borderRadius={8}
                p="8">

                <Heading size="lg" fontWeight="normal" color="black">
                    Configure
                </Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <Input
                            pk={"apiName"}
                            label={"Trigger name"}
                            type="text"
                            onChange={(e) => setFormData({...formData, apiName: e.target.value})}
                        />
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <FormControl>
                            <FormLabel htmlFor="apiMethod" color="black">Method</FormLabel>
                            <Select
                                id={"type"}
                                onChange={(e) => setFormData({...formData, type: e.target.value})}
                                icon={<MdArrowDropDown/>}
                                color={"black"}
                                size='lg'
                                placeholder='--Select--'>
                                <option value="API">API</option>
                                <option value="GRPC">GRPC</option>
                                <option value="CRON">CRON</option>
                            </Select>
                        </FormControl>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button
                            size="md"
                            colorScheme="red"
                            onClick={onRequestClose}>
                            Cancel
                        </Button>

                        <Button
                            onClick={handleSaveSubmit}
                            type="submit"
                            marginTop="6"
                            colorScheme="green"
                            size="md">
                            Save
                        </Button>
                    </HStack>
                </Flex>

            </Box>
        </Modal>
    )
}