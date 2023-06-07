import {
    Box,
    Heading,
    Text,
    Button,
    Grid,
    GridItem,
    Flex,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { SearchInput } from "../../components/SearchInput";
import { useEffect, useState } from "react";
import allStations from "./stations.json";
import Card from "../../components/Card/Index";

export const HubPage = (props: any) => {
    let { hubId } = useParams();
    let [stations, setStations] = useState<any>([]);

    useEffect(() => {
        setStations(allStations);
    }, []);

    const onInputChange = (value: string) => {
        console.log("value  ", value);
        if (value === "") return setStations(allStations);

        const filteredStations = stations.filter((station: Station) =>
            station.name.toLowerCase().includes(value.toLowerCase())
        );
        setStations(filteredStations);
    };

    return (
        <Box bg="gray.50">
            <NavBar>
                <Text fontSize="18px" mt={3} mb={2}>
                    Hub: {hubId}
                </Text>
                <Stack width={"lg"} >
                <SearchInput onChange={onInputChange} />

                </Stack>
                <Text fontSize="18px" mt={3} mb={2}></Text>
            </NavBar>
            <Flex paddingTop={20} paddingLeft={10} w="100%">
                <SimpleGrid
                    columns={4}
                    spacing="8"
                    w="100%"
                    h="100%"
                    p="10"
                    textAlign="center"
                    rounded="lg"
                    color="gray.400"
                >
                    {stations.map((station: any) => (
                        <Card station={station} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};
