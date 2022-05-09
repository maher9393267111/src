import React, { Component } from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import {Box,HStack,Flex,Spacer,} from '@chakra-ui/react'
import { useState, useEffect } from "react";

const Index = () => {
  const [page, setPage] = useState(true)
  

  const [show, setShow] = useState(false);

  const [slider, setSlider] = useState([]);
  const [transition, setTransition] = useState("");

  // whenen click arrow right transition 200px to the right

  // toggle page true or false

  const next = () => {

    setPage(!page)

    console.log(page)

    if (page){
        setTransition("transition1")

    }


    if (!page){
        setTransition("transition2")

    }


  

  

  }

  

  return (
    <div className="wrapper">

{/* --arrows-- */}

<HStack
as='div'

className="arrows-container">
    
<div onClick={next}>
<AiOutlineLeftCircle 
fontSize={'33px'}
/>
</div>

<div onClick ={next}>
<AiOutlineRightCircle
fontSize={'33px'}

/>
</div>



</HStack>


      <div className="container">
        <div className={` container-all ${transition}`}>
          <div>one</div>
          <div>to</div>
          <div>three</div>
          <div>four</div>
          <div>five</div>
          <div>six</div>
          <div>seven</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
