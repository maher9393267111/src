import React from 'react';
import {data} from './data'
import {motion} from 'framer-motion'
import {useState} from 'react'
import { Carousel } from 'react-bootstrap';
import {Flex,Box,Spacer,Grid,GridItem} from '@chakra-ui/react'
import {Row,Col,Button} from 'react-bootstrap'
import './swiper.css'




const Sub = () => {


return ( 

    <div >
       
 

<Carousel className='carousel'  indicators={false}  nextIcon={<span className="next">next icon</span>}
        prevIcon={<span className="prev">prev icon</span>}>


{/* -------------carousel parent end--------  */}

{/* <Flex> */}




  <Carousel.Item  className='caro-item' >

<div className='to-image'>
    


    <img
      className="d-block w-100"
      src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/10/retail-img-map-product-1-opt-330x340.jpg"
      alt="First slide"
    />
    

{/* -image2- */}

<img
      className="d-block w-100"
      src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/10/retail-img-map-product-1-opt-330x340.jpg"
      alt="First slide"
    />

</div>


  </Carousel.Item>
  <Carousel.Item
  className='caro-item'
  >
    <img
      className="d-block w-100"
      src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/10/retail-img-map-product-1-opt-330x340.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


{/* </Flex> */}

</Carousel>

</div>
)

}


export default Sub