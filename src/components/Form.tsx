import { ChakraProvider, Box, Center, Heading } from "@chakra-ui/react";
import { ButtonSubmit } from "./ButtonSubmit";
import { InputPlace } from "./InputPlace";
import { login } from "../services/login";

export const Form = () => {
  return (
    <ChakraProvider>
        <Center>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width={['90%', '60%', '40%', '20%']}>
                <Center flexDirection='column' width='100%' padding='0px 5%' justifyContent='center' alignContent='center'>
                    <Heading as='h1' fontSize='24px' paddingBottom='5px'>Faça login</Heading>
                    <InputPlace placeholder="email" type="email"/>
                    <InputPlace placeholder="password" type="password"/>
                    <ButtonSubmit onClick={login}/>
                </Center>
            </Box>
        </Center>
    </ChakraProvider>
  );
}