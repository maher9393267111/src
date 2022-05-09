import React from 'react';
import {
    Tabs,
    TabList,
    Box,
    TabPanels,
    Tab,
    TabPanel,
    Grid,
    GridItem,
    Button,
    Flex,
    Spacer,
  ButtonGroup,
  Container,
  Heading,

  } from "@chakra-ui/react";
  import {useState,useEffect} from 'react';


const TwoSlider = () => {

const [page, setPage] = useState(0);


    return (
        <Container bg={['blue',{md:'red.100'}]}>
            
<Box 

>


  {/* slide-header */}

<Flex>

<Heading as='h6' size='xl'>
SALE PRODUCTS

</Heading>

<Spacer />


<Box>

RIGHT

</Box>



</Flex>









</Box>




        </Container>
    );
}

export default TwoSlider;
