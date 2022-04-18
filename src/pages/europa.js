import { Container , Flex, Text, Box, SimpleGrid} from '@chakra-ui/react'

import Banner from '../components/Banner';
import CardCity from '../components/CardCity';
import Header from './../components/Header/index';

export default function Europa(){
    return (
    <>
    <Header/>
    <Banner urlImg="/images/banner-europa.jpg"/>

    <Container mt={20}   maxW='1160px'>  
        <SimpleGrid mb={20} columns={2} spacing={10}>
            <Text textAlign="justify" fontSize="2xl" >
                A Europa é, por convenção, um dos seis 
                continentes do mundo. Compreendendo a 
                península ocidental da Eurásia,a Europa geralmente divide-se da 
                Ásia a leste pela divisória de águas dos montes Urais, 
                o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>

            <Flex alignItems="center">
                <img src="/images/info-europa.svg"/>
            </Flex>

        </SimpleGrid>

        <SimpleGrid mb={12} columns={4} spacing={10}>
            <CardCity 
             city="Londres" 
             country="Reino Unido"  
             urlImg="/images/foto-londres.png"
             urlFlag="/images/flag-reino-unido.svg"/>

            <CardCity 
             city="Paris" 
             country="França"  
             urlImg="/images/foto-londres.png"
             urlFlag="/images/flag-franca.svg"/>

            <CardCity 
             city="Roma" 
             country="Itália"  
             urlImg="/images/foto-londres.png"
             urlFlag="/images/flag-italia.svg"/>

            <CardCity 
             city="Praga" 
             country="República Tcheca"  
             urlImg="/images/foto-londres.png"
             urlFlag="/images/flag-rep-tcheca.svg"/>

            <CardCity 
             city="Amsterdã" 
             country="Holanda"  
             urlImg="/images/foto-londres.png"
             urlFlag="/images/flag-holanda.svg"/>



        </SimpleGrid>

        
    </Container>

    </>
    )
}