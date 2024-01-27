import { ChakraProvider, Input } from "@chakra-ui/react";

interface InputPlaceProps{
    placeholder: string
    type: string
}

export const InputPlace = (props: InputPlaceProps) => {
    return(
      <ChakraProvider>
        <Input width='100%' marginTop='10px' placeholder={props.placeholder} type={props.type}/>
      </ChakraProvider>
    )
  }