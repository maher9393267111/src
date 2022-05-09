import React from "react";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
  Badge,
  VStack,
  StackDivider,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";

import { data } from "./data";

const MostPopular = () => {
  const [page, setPage] = useState(0);

  const [product, setProduct] = useState(data[0]);

  const [isHover, setHover] = useState(false);

  // handle page number change

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

  return (
    <Box bg="darkcyan">
      <Grid
        h="auto"
        marginBottom={"50px"}
        templateColumns={[
          { sm: "repeat(1,1fr)" },
          { md: "repeat(1,1fr)" },
          { lg: "repeat(12,1fr)" },
        ]}
      >
        {/* --image  item here ----- */}

        <GridItem colSpan={{ lg: 7 }}>
          <Image src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/08/retail-img-map-1-1.jpg.webp" />
        </GridItem>

        {/* ------slider item here ----- */}

        <GridItem
          bg="yellow.100"
          h={{ sm: "auto", md: "autopx", lg: "auto" }}
          pos={{ sm: "relative" }}
          Bottom={{ sm: "500px" }}
          colSpan={{ lg: 5 }}
        >
          {/* ------ header here ----- */}

          <div className="header-div" style={{ position: "relative" }}>
            <Box
              w="100%"
              alignItems={"center"}
              position="absolute"
              top={{ sm: "44px", lg: "70px" }}
            >
              <Center>
                <Text fontWeight={"bold"}>MostPopular PRODUCTS</Text>
              </Center>

              <Center>
                <Text fontWeight={"md"}>
                  Cum cubilia ac fringilla lorem quis himenaeos velit.
                </Text>
              </Center>
            </Box>
          </div>

          {/* ---relative parent end header --- */}

          {/* ------slider items image  here ----- */}

          <div className="slider-section-1">
            <motion.div
              whileInView={{
                x: page === 0 ? [-56, 0] : [-55, 0],
                opacity: [0, 1],
              }}
              // transition={{ duration: 0.5 }}
              className="app__header-info"
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
            >
              <div className="image-container">
                <img className="image" src={product.image} alt="" />
              </div>
            </motion.div>

            <div className="arrows-container-1">
              <motion.div
                transition={{ duration: 0.5 }}
                whileInView={{
                  opacity: isHover ? [0, 1] : [1, 0],
                  x: isHover ? [0, -10] : [0, -10],
                }}
              >
                {/* -left arrow--- */}

                <Box
                  onClick={decrease}
                  position={"absolute"}
                  left="30px"
                  top="-166px"
                  className="left-arr"
                >
                  <AiOutlineArrowLeft />
                </Box>

                {/* -right arrow--- */}

                <Box
                  onClick={increase}
                  position={"absolute"}
                  right="29px"
                  top="-166px"
                  className="ri-arr"
                >
                  <AiOutlineArrowRight />
                </Box>
              </motion.div>
            </div>

            {/* ---arrows container end--- */}

            {/* ------product icons ans name  start----- */}

            <div className="image-under-container">
              {/* --- icons div container start--- */}

              <div className="icons-1-container">
                <span>
                  <BsBookmarkHeart
                    className="icon1"
                    style={{ display: "inline" }}
                  />
                </span>

                <span>
                  <FcShop className="icon1" style={{ display: "inline" }} />
                </span>
              </div>

              {/* --- icons div container end--- */}

              {/* -----name------- */}

              <div className="pro-name">
                <Box fontSize={"lg"} fontWeight={"bold"}>
                  {product.name}
                </Box>

                <Box fontSize={"lg"} fontWeight={"bold"}>
                  {product.price}
                </Box>
              </div>

              {/* change image circle icons --- */}

              <Box as="div" alignItems={"center"}>
                <Box textAlign={"center"}>
                  <span onClick={decrease}>
                    {" "}
                    <BiCircle
                      style={{ display: "inline-block", fontSize: "20px" }}
                    />{" "}
                  </span>

                  <span onClick={increase}>
                    <BiCircle
                      style={{ display: "inline-block", fontSize: "20px" }}
                    />
                  </span>
                </Box>
              </Box>
            </div>

            {/* ------product icons ans name end here----- */}
          </div>

          {/* ----slider sec end ------ */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MostPopular;
