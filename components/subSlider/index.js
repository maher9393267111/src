import React from 'react';

import {motion} from 'framer-motion'
import {useState} from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// import { Carousel } from 'react-bootstrap';
import {Flex,Box,Spacer,Grid,GridItem,Text} from '@chakra-ui/react'
import {Row,Col,Button} from 'react-bootstrap'
import './swiper.css'
import {data} from './data'

import Slider from "react-slick";








const Sub = () => {


    const settings = {
        dots: true,
        
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 3
      }


    const [activeSlide, setActiveSlide] = useState(0);
    console.log(data)
return ( 

    <div >

{/* --HEADER--- */}

<Box>

<Text w='300px' paddingBottom='13px' fontSize={'xl'}  fontWeight='bold' 

borderBottom={'3px solid orange'}
transform={'translateX(120px)'}>

ALL FOR THE GARDEN



</Text>


</Box>


{/* -------slider container---- */}

<div className='slider-container'>
    



<Slider {...settings}>
    


{data.map((item,index)=>{

return (

<div className='slider-item'>
    
<h1>{item.name}</h1>



</div>




)



})}



    </Slider>



    
    </div>



</div>
)

}


export default Sub