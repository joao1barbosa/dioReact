import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header"
import { Form } from "./Form"

export const Card = () => {
  return(
    <ChakraProvider>
      <Box height='100vh' width='100wh' backgroundColor='#9413dc' padding='25px'>
        <Header/>
        <Form/>
      </Box>
    </ChakraProvider>
  )
}