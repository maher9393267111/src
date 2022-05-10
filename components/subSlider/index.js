import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// import { Carousel } from 'react-bootstrap';
import {
  Flex,
  Box,
  Spacer,
  Grid,
  GridItem,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Row, Col, Button } from "react-bootstrap";
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSuitHeart} from 'react-icons/bs'

import "./swiper.css";
import { data } from "./data";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Slider from "react-slick";

const Subslider = () => {
  const [page, setPage] = useState(true);

  const [show, setShow] = useState(false);
  const [isHover, setHover] = useState(false)

  const [slider, setSlider] = useState([]);
  const [transition, setTransition] = useState("");

  const next = () => {
    setPage(!page);

    console.log(page);

    if (page) {
      setTransition("transition1");
    }

    if (!page) {
      setTransition("transition2");
    }
  };

  return (
    <Box className="wrapper">
      <Flex  justifyContent=
      {'center'} as="div" margin={'10'} >
        
 {/* -------left title */}


<Box>

<Text marginLeft={'33px'} 
fontWeight={'bold'}
fontSize='22px'
paddingBottom={'14px'}
borderBottom='2px solid orange'

as='h3'>FOR TRAVELERS</Text>

</Box>



<Spacer size={'3'}/>


{/* arrows iconsright sider */}


<HStack spacing={'12px'}>

<Box onClick={next}
fontSize='30px'  ><AiOutlineLeftCircle /></Box>

<Box onClick={next}
  fontSize = '30px'
>
<AiOutlineRightCircle />

</Box>


</HStack>




      </Flex>





{/* -------products slider----- */}


<div className="container">
        <div className={` container-all ${transition}`}>

{data.map((item,index)=>{

return (


  <motion.div
  
      // whileInView={{ x:  page === 0 ? [-200, 0] : [-210,0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
    >




<div className="pro-item">
  
{/* -----image container ---- */}

<div className="image-container">
  
<img src={item.image} alt={item.name}/>


</div>



{/* -----icons hover show div */}
<motion.div
 
 animate={{
  opacity: isHover ? 1 : 0,
  translateY: isHover ? 0 :10,
  transition: { duration: 0.7, ease: "easeInOut" },
  
  // rotate: isHover ? 90 : 0,
}}
 >

<Box  as="div">

<Flex width={'80%'} margin='auto'  spacing={'12px'}>

<AiOutlineShoppingCart fontSize={'22px'}   />
<Spacer/>

< BsSuitHeart fontSize='22px'/>

<Spacer/>
<BiSearchAlt2
fontSize='22px'

 />


</Flex>




</Box>

</motion.div>





{/* ---product name and price--- */}



<Box color={'black'} alignItems={'center'} as="div">

<Box bg='green.100'> {item.name}</Box>

<Box bg='green.100'> {item.price}</Box>



</Box>




</div>

</motion.div>



)



})}



        
        </div>
      </div>



    </Box>
  );
};

export default Subslider;
