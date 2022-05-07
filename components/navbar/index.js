import React from "react";
import Desknav from './desknav'
import Mobilenav from './mobilenav'
import { Container } from "@chakra-ui/react";
import { useState,useEffect } from "react";


import { useMediaQuery } from 'react-responsive'
import './nav.css'
const Navbar = () => {

    const isLaptop = useMediaQuery({
        query: '(min-width: 900px)'
      })
      const isMobile = useMediaQuery({ query: '  (max-width: 899px' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  


// if  window is less than 900px wide, render mobilenav

   useEffect(() => {

    if (isMobile) {

        console.log('mobile')
    }

    else if (isLaptop) {

        console.log('laptop')

    }

}, [isMobile, isLaptop])





  return (
    <div className="nav-wrapper"  >
      <Container>
          
        
        {isMobile &&  <Mobilenav /> }
        {isLaptop && <Desknav /> }


      </Container>
    </div>
  );
};

export default Navbar;
