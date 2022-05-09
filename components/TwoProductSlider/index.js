import React from "react";
import './index.css'
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
  HStack,
  Text,
  Badge ,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState, useEffect,useRef } from "react";
import { data } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import {BiSearchAlt2} from 'react-icons/bi'
import {FiHeart } from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const TwoSlider = () => {
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState(data[0]);
  const [isHover, setHover] = useState(false)
  const [number, setNumber] = useState(0);
const animref = useRef('1');

  const items = {
    hidden: { opacity: 0, y: 200, x: 200 }, // initial state
    show: {
      // animate {show}state
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

// excute emotion when  everytime page number change


useEffect(() => {

  console.log(number,'number is changed ');

}, [number]);







  //handle page change

  const increase = (e) => {
    console.log("increase---->", page, product);


    setPage(page + 1);

    if (page === 1) {
      setPage(0);
    }

    console.log("page number is ---->", page);
    setProduct(data[page]);
  };

  // ----decrease-----

  const decrease = (e) => {
    setPage(page - 1);

    if (page === 0) {
      setPage(1);
    }

    console.log("page number is ---->", page);

    setProduct(data[page]);
  };


  const iconsbar = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 2, top: 40 },
}


  return (
    <Container
       bg={["blue", { md: "red.100" }, { lg: "green.100" }]}
      w={{ sm: "600px", md: "100%" }}
      h={{ sm: "600px", md: "70%" }}
    >
      <Box>
        {/* slide-header */}

        <Flex paddingTop="33px">
          <Heading as="h6" size="md">
            SALE PRODUCTS {page}
          </Heading>

          <Spacer />

          <Box>
            {/* -------arrow icons in header-------- */}
            <HStack>
              <h3 value ={page} onClick={decrease}>
                <ArrowLeftIcon  />{" "}
              </h3>

              <h3 value ={page} onClick={increase}>
                {" "}
                <ArrowRightIcon />
              </h3>
            </HStack>
          </Box>
        </Flex>

        {/* ----------products slider ------------ */}

        
{/* ------ vartical hover icons in side image */}


      
   


<Box position={'relative'} >

 {/* --------here-------- */}
{/* {isHover && */}

<motion.div
 
 animate={{
  opacity: isHover ? 1 : 0,
  translateX: isHover ? 0 :10,
  transition: { duration: 0.5, ease: "easeInOut" },
  
  // rotate: isHover ? 90 : 0,
}}
 


>

<Box   right={'1px'} position={'absolute'} top='15px'>


<VStack
  // divider={<StackDivider borderColor='gray.200' // line between vstack items/>}
  // spacing={4}   --> for make border between icons
  align='stretch'
>
  <Box textAlign={'center'} h='40px' w='40px' bg='yellow.200'>
    <FiHeart className="side-icons" />
  </Box>
  <Box position={'relative'} textAlign={'center'} h='40px' bg='tomato'>
  <BiSearchAlt2 className="side-icons"/>
  </Box>
  <Box  position={'relative'} textAlign={'center'} h='40px' bg='pink.100'>
    <AiOutlineShoppingCart className="side-icons" />
  </Box>
</VStack>



</Box>
</motion.div>
{/* } */}








</Box>







{/* ------ vartical hover icons in side image  END */}



{/* ----animation---- */}

    <motion.div
    ref={animref}
        whileInView={{ x:  page === 0 ? [-200, 0] : [-210,0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
        onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
      >





        <Box>
          {/* ------product image ------ */}

          <Box h="70%" w="80%" margin={"auto"}>
            <img h="100%" w="100%" src={product.image} alt="product" />
          </Box>




            {/* ------product name ------ */}

            <Box h="70%" w="80%" margin={"auto"}>
          <Text textAlign={'center'} marginTop='20px'>{product.name}</Text>

{/* ----animation header text ---- */}

<motion.div
      initial={{ x: -5000, opacity: 0 }}  // initial state
         animate={{ x: 0, opacity: 1 }} >       
       

<Text textAlign={'center'} paddingToP='12px'> BestSellers</Text>


</motion.div>

{/* -animate header text end */}


<Text textAlign={'center'} fontWeight='md'>

<Badge  marginRight={'10px'} padding='4px'  > {product.discountprice} </Badge >

<Badge padding='4px'  >{product.price}</Badge >
</Text>



          </Box>

            {/* ------product name end ------ */}


        </Box>


        </motion.div>  

      
{/* ---animation end------- */}

  {/* ----------products slider images end ------------ */}

    
      </Box>






    </Container>
  );
};

export default TwoSlider;
