import React from "react";
import "./index.css";
import { data } from "./data";
// import {data} from './data'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {BiCommentEdit} from 'react-icons/bi'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {GiShare} from 'react-icons/gi'
import {TiSocialLinkedin} from 'react-icons/ti'
import {TiSocialPinterest} from 'react-icons/ti'
import {TiSocialReddit} from 'react-icons/ti'


import TooltipComponent from '../helper/tooltip';
import {
  Box,
  Text,
  Grid,
  SimpleGrid,
  Heading,
  Spacer,
  GridItem,
  Center,
  Flex,
  Wrap,WrapItem,Avatar ,Button, HStack
} from "@chakra-ui/react";

const Blog = () => {
  const [page, setPage] = useState(true);
  const [transition, setTransition] = useState("");

  const slide = () => {
    setPage(!page);

    console.log(page);

    if (!page) {
      setTransition("");
    }

    if (page) {
      setTransition("transition1");
    }
  };

  return (
    <Box marginTop={"44px"}>
      {/* --header--- */}

      <Heading
        marginLeft="22px"
        paddingBottom="12px"
        w="80%"
        borderBottom={"2px solid #bbb"}
      >
        <Text className="line-after" w="fit-content" onClick={slide}>
          OUR BLOGS
        </Text>
      </Heading>

      {/* ---header end  */}

      {/* ----blogs slideer start ----  */}

      <Box marginBottom="55px" className="blogs-wrapper">
        <motion.div
          whileInView={{
            // - from left to right 0 his palace
            // + from right to left 100% his palace
            x: page ? [-100, 0] : [101, 0],
            opacity: [0, 0.9],
          }}
          // transition={{ duration: 0.5 }}
        >
          <Box className={` blogs-container ${transition}`}>
            {/* ---map data to blogs--- */}

            {data.map((item, index) => {
              return (
                <div className="blog-item"  style={{position:'relative'}}>
                  {/* -----blog image --- */}

                  <div className="blog-image">
                    <img src={item.image} alt="blog" className="blog-image" />

{/* //image oveflow  here---- */}

<div className="overlay-image">
    
</div>



                  </div>

                  {/* -------info------ */}

                  <Box position={"relative"}>
 
 
{/* ---- absolute date and tags-- */}


<Box position={'relative'} >


{/* -------date------ */}
<Box position={"absolute"} 
top="-266px"
borderRadius={"50%"}
padding="10px"
fontSize="15px"
fontWeight="bold"
bg='white'
left={'10px'}
paddingBottom="17px"
>

23 JULY 2022


    </Box>

{/* -----date end-----  */}


{/* ------tags------  */}

<Box position={'absolute'}
top={'-15px'}
left='33px'
textAlign={'center'}
fontSize={'12px'}
padding={'5px'}
zIndex={'1111'}
color='white'
fontWeight={'bold'}
bg='orange'
>

{item.tags}


</Box>


{/* ------tags  end------  */}



</Box>



{/* ---- absolute date and tags end-- */}



{/* --------info  ------ */}

<Box>

<Text  textAlign={'center'} 
fontWeight={'mdium'}

> 
    {item.description}

</Text>


{/* ------bostedby ------ */}
<Box>

<Flex
width={'44%'}
margin={'0 auto'}
size='xl'
>
  <WrapItem
  textAlign={'center'}
  >

    <Avatar name={item.name} src={item.avatar} />


<WrapItem 
paddingTop='10px'
paddingLeft='10px'
fontWeight={'bold'}
fontSize={'7px'}
>
{item.writer}
</WrapItem>


  </WrapItem>

<Spacer  />

  <WrapItem
  
  paddingTop='11px'
  marginLeft={'10px'}
  >

<HStack>

<WrapItem>
    
    <BiCommentEdit size={'22px'} />
</WrapItem>


<WrapItem>

<TooltipComponent  icon ={ <GiShare size={'22px'} /> }  >

<Flex>
<TiSocialLinkedin size={'22px'} />
<TiSocialFacebook size={'22px'} />
<TiSocialTwitter size={'22px'} />
<TiSocialPinterest size={'22px'} />


</Flex>




</TooltipComponent>

    
</WrapItem>


</HStack>

    
  </WrapItem>

    </Flex>





</Box>




</Box>





                  </Box>

                  {/* ---info end--- */}
                </div>
              );
            })}

            {/* ---map data to blogs end here--- */}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Blog;
