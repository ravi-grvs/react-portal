import {
    Button,
    Text,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    ModalFooter,
    Center,
    useClipboard,
    Stack,
    Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import QRCode from "qrcode.react";

interface Props {
    onModalClose: () => void;
    station: Station;
}
export const ModalComponent = ({ onModalClose, station }: Props) => {
    const stationBarcode = `ST-${station.id}`;
    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    const { onClose } = useDisclosure();

    useEffect(() => {
        setValue(stationBarcode);
    }, []);

    const handleOnClose = () => {
        onClose();
        onModalClose();
    };

    return (
        <Modal isCentered isOpen={true} onClose={handleOnClose}>
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(13px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalCloseButton color={"red"} size={"lg"}/>
                <ModalHeader></ModalHeader>
                <Center>
                    <ModalBody >
                        <Center>
                            <Stack direction={"column"} align={"center"} gap={3}>
                                <QRCode
                                    style={{ height: 300, width: 300 }}
                                    value={stationBarcode}
                                    renderAs="canvas"
                                />
                                <Text
                                    color={"gray.500"}
                                    fontSize={"sm"}
                                    textTransform={"uppercase"}
                                >
                                    {station.name}
                                </Text>
                                <Center >
                                <Stack direction={"column"} align={"center"} paddingTop={10}>
                                <Heading
                                    fontSize={"2xl"}
                                    fontFamily={"body"}
                                    fontWeight={500}
                                >
                                    {stationBarcode}
                                </Heading>
                                <Button onClick={onCopy}> {hasCopied ? "Copied!" : "Copy"} </Button>
                            </Stack>

                                </Center>

                            </Stack>
                        </Center>
                    </ModalBody>
                </Center>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};
