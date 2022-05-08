import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Center,
  Container
  
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon,LinkIcon,MinusIcon } from "@chakra-ui/icons";

// ICONS REACT AND CHAKURA

import { Icon } from '@chakra-ui/react'

import { AiOutlineHeart ,AiOutlineSearch} from 'react-icons/ai'

import {IoMdBasket} from 'react-icons/io'


import { useState,useEffect } from "react";

const TableproductCard = ({ product }) => {
  //console.log('product---->',product)

const [showmore, setShowmore] = useState(false);


const showMore=()=>{

setShowmore(!showmore)

}


  return (
    <GridItem h="auto"  shadow={'xl'}>
      <div className="product-wrapper">
        {/* -------image div------- */}

        <div className="product-image-container">
          <img className="product-img" src={product.image} alt={product.name} />

 {/* --show discount above image if there is discount----  */}
 { product.discount &&<div className="discount-container">
       <span className="discoun-span">{product?.discount}%</span>   
 </div>

        }


        </div>


{/* -----hover to show ------ */}

<Flex className="icon-div-hover">
    
    <h1></h1>

    <Spacer/>

    <LinkIcon marginEnd={'10px'} fontWeight='bold' />


</Flex>



        {/* -------product name div------- */}

        <Box className="product-name-container"        _hover={{ bg: "blue.500", color: " white" }}>
          <Text>{product.name}</Text>
          
          

        </Box>

  {/* ---------product price div-------  */}

<Box marginBottom={'14px'} textAlign={'center'} mt='3.5' fontSize={'17px'} fontWeight={'bold'}>

{product?.discount ? ( <Flex >

    <bdi className="old-price-line" style={{paddingLeft:'30px'}}><span class="woocommerce-Price-currencySymbol">$</span>{product.priceafterdiscount}</bdi>
    <Spacer />
    <bdi style={{paddingRight:'22px'}}><span class="woocommerce-Price-currencySymbol">$</span>{product.price}</bdi>
</Flex>) : (<div>
    <Text>{product.price}</Text>
</div>)}


</Box>


{/* -----product desc and icons----- */}

<Box className="product-desc">

    {/* slice desc and show all desc when click icon */}

    <Text   minH={'150px'}  maxH='300px' fontSize={'14px'}>

{product.desc.slice(0,showmore ? product.desc.length : 100)}


        </Text>


        {/* show more and less icon */}
        <Center marginBottom={'8px'}  position='relative' 
        
        top={['-10px','-10px','-10px','-55px']}

        >
        
        

{!showmore &&  <MinusIcon onClick={showMore} /> }


</Center>

{/* ---------icons flex start ---------- */}
<Container marginLeft={'10px'}  marginRight='12px'>



<Flex className=""  marginBottom={'14px'}>

<AiOutlineHeart fontSize={'22px'}/>

<Spacer />

<AiOutlineSearch fontSize={'22px'}/>

<Spacer />

<IoMdBasket fontSize={'22px'}/>

</Flex>


</Container>

{/* --------icons end-------- */}


</Box>





      </div>
    </GridItem>
  );
};

export default TableproductCard;
