
import { Flex, Text , Image, useBreakpointValue } from '@chakra-ui/react'

export default function TravelType({icon, label}){
    
    const isLarger = useBreakpointValue({ base:false,sm:true})
      
    return(
        <Flex alignItems="center" direction={["row","column"]}>
            { (isLarger)? <Image src={icon}  /> : <Text position={'relative'} top={2.5} color="yellow.400" fontSize="4xl" mr="2">•</Text>} 
            <Text color="gray.700" mt={6} fontWeight="600" fontSize={{ base: '18px', md: '2xl' }} >{label}</Text>
        </Flex>
    )
}