import { Flex } from "@chakra-ui/react";

export const NavBar = ({children}: any) => {
    return (
        <>
            <Flex
                as="header"
                position="fixed"
                justifyContent={"space-between"}
                backdropFilter="saturate(180%) blur(5px)"
                backgroundColor={"white"}
                w="100%"
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={10}
                paddingRight={10}
                zIndex={999}
                boxShadow={"md"}
            >
                {children}
            </Flex>
        </>
    );
};
