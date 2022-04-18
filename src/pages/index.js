import { Container , SimpleGrid, Box, Flex } from '@chakra-ui/react'

import Banner from '../components/Banner';
import Slider from '../components/Slider';
import TravelType from '../components/TravelType';
import Header from './../components/Header/index';

export default function Home() {

  return (
    <div>
      <Header/>
      <Banner urlImg="/images/banner.svg"/>
      <Container mt={{base: 0, sm: 0, md: 20}}  maxW={1240}>   
        <SimpleGrid  columns={{base: 2, sm: 2, md: 5}} >  
          <TravelType icon="/images/cocktail.svg" label="vida noturna"/>
          <TravelType icon="/images/surf.svg" label="praia"/>
          <TravelType icon="/images/building.svg" label="moderno"/>
          <TravelType icon="/images/museum.svg" label="clássico"/>
          <TravelType icon="/images/earth.svg" label="e mais..."/>
        </SimpleGrid> 
        
        <Flex mt={{base: 6,  md: 14}}  mb={{base: 6,  md: 14}}  justifyContent={'center'} >
          <img src="/images/divider.svg"></img>
        </Flex>
       

        <Slider/>
      </Container>


    </div>
  )
}
