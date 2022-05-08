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
  
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const TableproductCard = ({ product }) => {
  //console.log('product---->',product)

  return (
    <GridItem h="309px"  shadow={'xl'}>
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



        {/* -------product name div------- */}

        <Box className="product-name-container"        _hover={{ bg: "blue.500", color: " white" }}>
          <Text>{product.name}</Text>
          
          

        </Box>

  {/* ---------product price div-------  */}

<Box textAlign={'center'} mt='3.5' fontSize={'17px'} fontWeight={'bold'}>

{product?.discount ? ( <Flex >

    <bdi className="old-price-line" style={{paddingLeft:'30px'}}><span class="woocommerce-Price-currencySymbol">$</span>{product.priceafterdiscount}</bdi>
    <Spacer />
    <bdi style={{paddingRight:'22px'}}><span class="woocommerce-Price-currencySymbol">$</span>{product.price}</bdi>
</Flex>) : (<div>
    <Text>{product.price}</Text>
</div>)}




</Box>




      </div>
    </GridItem>
  );
};

export default TableproductCard;
