import {  Center, ChakraProvider, Heading } from "@chakra-ui/react"

export const Header  = () => {
  return(
    <ChakraProvider>
      <Center>
        <Heading as ='h1' size='3xl' color="#000000" paddingBottom="10">
          Dio Bank
        </Heading>
      </Center>
    </ChakraProvider>
  )
}
