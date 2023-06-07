import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const color = useColorModeValue('brand.100', 'gray.500');
  const navigate = useNavigate();


  const hubs = [{
    id:3,
    name:"Blandon"
  },
  {
    id:4,
    name:"Valencia"
  },
  {
    id:5,
    name:"Southaven"
  }]
  return (
    <Center py={6} gap={10}>
      {hubs.map(hub=>{
        return(
          <Box
        maxW={'330px'}
        w={'full'}
        bg={color}
        marginTop={10}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={color}
          align={'center'}>
         
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={800}>
              {hub.name}
            </Text>
          </Stack>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={color}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            HUB
          </Text>
        </Stack>

        <Box bg={color} px={6} py={10}>
          <List spacing={3}>
          </List>
          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}
            onClick={()=> navigate(`/hub/${hub.id}`)}>
            Select
          </Button>
        </Box>
      </Box>
        )
      })}
    </Center>
  );
}