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
    HStack, Button
} from "@chakra-ui/react";
import {FaRegTimesCircle, MdArrowDropDown} from "react-icons/all";
import {Input} from "../../form/Input";
import {TriggerData} from "../Trigger";
import {FormEvent, useState} from "react";


interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    onRequestSave: (type: string, apiName: string) => void;
}

export function TriggerDialog({
                                  isOpen,
                                  onRequestClose,
                                  onRequestSave
}: Props) {

    const [formData, setFormData] = useState<TriggerData>({
        type: '',
        apiName: '',
    })

    const handleSaveSubmit = (e: FormEvent) => {
        e.preventDefault();
        onRequestSave(formData.type, formData.apiName);
        onRequestClose();
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
                    <FaRegTimesCircle size={25} />
                </button>
            </Flex>

            <Box
                mt="8"
                flex="1"
                borderRadius={8}
                bg="gray.800"
                p="8"
                >
                <Heading size="lg" fontWeight="normal">
                    Configure
                </Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <Input
                            pk={"apiName"}
                            onChange={(e) => setFormData({...formData, apiName: e.target.value})}
                            label={"Trigger name"}
                            type="text"
                        />
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                        <FormControl>
                            <FormLabel htmlFor="apiMethod">Method</FormLabel>
                            <Select
                                onChange={(e) => setFormData({...formData, type: e.target.value })}
                                icon={<MdArrowDropDown/>}
                                id={"triggerMethod"}
                                size='lg'
                                borderColor='pink.500'
                                _hover={{
                                    borderColor: 'pink.500'
                                }}
                                placeholder='-- selecione --'
                            >
                                <option style={{background: "#353646"}} value="API">API</option>
                                <option style={{background: "#353646"}} value="GRP">GRP</option>
                                <option style={{background: "#353646"}} value="CRON">CRON</option>
                            </Select>
                        </FormControl>
                    </SimpleGrid>
                </VStack>
                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button
                            size="md"
                            colorScheme="whiteAlpha"
                            onClick={() => {}}
                        >
                            Cancel
                        </Button>

                        <Button type="submit"
                                marginTop="6"
                                colorScheme="purple"
                                onClick={(e) => handleSaveSubmit(e)}
                                size="md">
                            Save
                        </Button>
                    </HStack>
                </Flex>
            </Box>
        </Modal>
    )
}