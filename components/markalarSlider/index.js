import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
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
  Center,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { data } from "./data";
import { motion } from "framer-motion";
const Markalar = () => {
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
    <Box>
      <Center display={'flex'} >
        <Heading onClick={slide} as="h1" size="xl">
          Markalar and Brands

 


         

            
        </Heading>
      </Center>







      {/* -------slider start here ----------------- */}

      <Box as="div" className="wrapper-markalar">
        <motion.div
          whileInView={{
            x: page ? [-100, 0] : [-101, 0],
            opacity: [0, 0.9],
          }}
          // transition={{ duration: 0.5 }}
        >
          <Box as="div" className={` container-markalar ${transition}`}>
            {data.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="image-container-marka">
                    <img src={item.image} alt={item.id} />
                  </div>
                </div>
              );
            })}
          </Box>
        </motion.div>
      </Box>

      {/* -------slider end here ----------------- */}
    </Box>
  );
};

export default Markalar;
