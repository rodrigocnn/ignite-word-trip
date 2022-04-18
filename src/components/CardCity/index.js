import { Box, Flex, Text} from '@chakra-ui/react'

export default function CardCity({urlImg, city, country,  urlFlag}){
    return(
        <>  
        <Box >
            <img src={urlImg}/>
            <Flex 
             borderRight="1px"
             borderLeft="1px"
             borderBottom="1px"
             borderColor='orange.200'
             justifyContent="space-between" 
             padding="10px 30px">

                <Flex flexDirection="column">
                    <Text color="#47585B">{city}</Text>
                    <Text fontSize="16px" color="#999999">{country}</Text>
                </Flex>
                <img src={urlFlag}/>
            </Flex>
        </Box>
           
        </>
    )
}