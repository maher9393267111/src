import React from "react";
import "./index.css";
import { header, stories, useful } from "./data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  Wrap,
  WrapItem,
  Avatar,
  Button,
  HStack,
  Input
} from "@chakra-ui/react";

const Footer = () => {
  console.log(stories);

  return (
    <Box
    color='white'
    fontWeight={'bold'}
      width={"100%"}
      height={{ sm: "auto", lg: "600px" }}
      bg="#092143"
      marginTop={"44px"}
    >
      {/* ------header------ */}

      <Flex
        wrap={"wrap"}
        justifyContent={"space-between"}
        paddingTop="30px"
        paddingBottom="30px"
        borderBottom={"2px solid orange"}
      >
        {header.map((item, index) => (
          //   ---single item here----

          <Box
            w={{ sm: "50%", md: "25%" }}
            marginBottom={{ sm: "40px", md: "10px" }}
          >
            <Flex>
              <Box padding="17px" fontSize={"30px"}>
                {item.icon}
              </Box>

              <Box>
                <Spacer />

                <Box textAlign={"center"}>{item.title}</Box>
                <Box textAlign={"center"}>{item.description}</Box>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      {/* -----------main section  start ------ */}

      <Box>
        <Grid
          gridTemplateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(12, 1fr)" }}
        >
          {/* ----- left  7----- */}

          <GridItem colSpan={{ sm: 1, lg: 8 }}>
            {/* -----links container----- */}
            <Box>
              <Flex padding={"44px"} >
                {/* -----links one----- */}
                <Box marginRight={"33px"}>
                  <Heading
                    size={{ sm: "sm", md: "md" }}
                    color="white"
                    fontWeight={"bold"}
                  >
                    OUR STORIES 1
                  </Heading>

                  {/* ---stories links- */}

                  <div className="list-container">
                    <ul>
                      {stories.map((item, index) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Box>

                <Spacer />

                <Box marginRight={"33px"}>
                  <Heading
                    size={{ sm: "sm", md: "md" }}
                    color="white"
                    fontWeight={"bold"}
                  >
                    USEFEL LIKNKS1
                  </Heading>

                  <div className="list-container">
                    <ul>
                      {useful.map((item, index) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Box>

                <Spacer />

                <Box marginRight={"33px"}>
                  <Heading
                    size={{ sm: "sm", md: "md" }}
                    color="white"
                    fontWeight={"bold"}
                  >
                    OUR STORIES 2
                  </Heading>

                  <div className="list-container">
                    <ul>
                      {stories.map((item, index) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Box>

                <Spacer />
                <Box>
                  <Heading
                    size={{ sm: "sm", md: "md" }}
                    color="white"
                    fontWeight={"bold"}
                  >
                    USEFEL LIKNKS2
                  </Heading>

                  <div className="list-container">
                    <ul>
                      {useful.map((item, index) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          {/* ----- right 5 ----- */}

          <GridItem colSpan={{ sm: 1, lg: 4 }}>
            {/* --header0 */}
            <Box
              as="div"
              paddingBottom="22px"
              fontWeight={"bold"}
              paddingLeft={"20px"}
            >
              <Text> AVALIABLE ON :</Text>
            </Box>

            {/* ---images container----- */}
            <Box as="div" paddingBottom="22px">
              <Flex paddingLeft={"20px"} paddingRight={"20px"}>
                <Box textAlign={"center"} width="50%">
                  <img
                    style={{ width: "177px", height: "66px" }}
                    src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/08/app-store-button.png.webp"
                    alt=""
                  />
                </Box>
                <Spacer bg="blue.400" />
                <Box textAlign={"center"} width="50%">
                  <img
                    style={{ width: "177px", height: "66px" }}
                    src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/08/google-play-button.png.webp"
                    alt=""
                  />
                </Box>
              </Flex>
            </Box>

            {/* -image end-- */}

            <Box
              as="div"
              fontWeight={"bold"}
              fontSize={"20px"}
              paddingBottom="22px"
              paddingLeft={"20px"}
            >
              <Text>Join our newsletter!</Text>
            </Box>

            {/* -privact text--- */}


            <Box as="div"

fontWeight={'bold'}
// fontSize={'20px'}
paddingBottom='22px'
paddingLeft={'20px'}
fontSize={{sm:'22px',lg:'15px'}}

>


<Text>

Will be used in accordance with our
<Text as="span" color="orange.500">

Privacy Policy

    </Text>

</Text>


</Box>
       


{/* -contact form--- */}


<Box
as="div"
fontWeight={'bold'}
marginBottom={'22px'}
paddingLeft={'20px'}
>

<Flex
paddingLeft={'30px'}
paddingRight={'30px'}



>


<Box
paddingRight={'33px'}
>
<Input
className="contact-input"


htmlSize={18}  outLine='green' width='auto' />

</Box>
{/* <Spacer /> */}

<Box>
<Button colorScheme='orange'>Button</Button>
</Box>




</Flex>




</Box>





          </GridItem>
        </Grid>
      </Box>

      {/* -----------main section  end ------ */}
    </Box>
  );
};

export default Footer;

// <Grid
//   templateColumns={{
//     sm: "repeat(2, 1fr)",
//     md: "repeat(2, 1fr)",
//     lg: "repeat(4, 1fr)",
//   }}
//   borderBottom={"2px solid #bbb"}
//   position="relative"
//   top={"40px"}
//   h={{ sm: "188px", md: "130px", lg: "130px" }}
// >
//   {header.map((item, index) => {
//     return (
//       <Box className="header-item">
//         <Flex>
//           <Box w="50px">{item.icon}</Box>

//           <Spacer w="4px" />

//           <Box w="100px" flex="1" paddingRight={"40px"}>
//             <Box textAlign={"center"}>{item.title}</Box>

//             <Box textAlign={"center"} fontSize={"12px"} fontWeight={"500"}>
//               {item.description}
//             </Box>
//           </Box>
//         </Flex>
//       </Box>
//     );
//   })}
// </Grid>;
