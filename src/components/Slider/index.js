import { Flex, Text, Center, Container } from '@chakra-ui/react'

export default function Slider() {
    return (
        <>
            <Center mb="50px">
                <Text color="#47585B" fontSize={{ base: '20px', md: '4xl',  }} fontWeight="500"  align="center">
                    Vamos nessa? <br/>
                    Então escolha seu continente
                </Text>
            </Center>

            <Center w="100%" mb="50px">
                <img src="/images/slider.png"/>
            </Center>
    
        </>

    )
}