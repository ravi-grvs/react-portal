import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useClipboard,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import { ModalComponent } from "../Modal";


interface Props {
  station: Station;
  onCardClick?: ()=> void;
}

const StationQRCode = (station:Station)=>{
  const stationBarcode = `ST-${station.id}`;

return( <Center>
  <QRCode style={{ height: 230, width: 230 }} value={stationBarcode} renderAs="canvas" />,
</Center>
)
}
export default function ProductSimple({ station }: Props) {
  const stationBarcode = `ST-${station.id}`;
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setValue(stationBarcode)
  }, [])

  return (
    <Center py={4}>
      <Box
        _hover={{
          boxShadow: "2xl",
          transform: "translateY(-5px)",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-in-ease-out",
        }}
        role={"group"}
        p={6}
        maxW={"330px"}
        maxH={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-1}
          pos={"relative"}
          height={"200px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundColor: `lightgray`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
          onClick={()=> setShowModal(true)}
        >
          {StationQRCode(station)}
        </Box>
        <Stack pt={10} align={"center"}>
          <Text
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {station.name}
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {stationBarcode}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
          </Stack>
        </Stack>
      </Box>
      {showModal && <ModalComponent onModalClose={()=>setShowModal(false)} station={station}/>}
    </Center>
  );
}
