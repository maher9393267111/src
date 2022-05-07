import React from "react";
import './index.css';

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import {   Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  Image,
  VStack,
  Center,
  Icon,
  
  
 } from '@chakra-ui/react'

 import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import { motion, useMotionValue, useTransform } from "framer-motion";
const Practice = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  



  return (
    <div>
      <h1 className="   bg-slate-500">Practice</h1>
     
  
      <HStack>
  <Center w='40px' h='40px' bg='tomato' color='white'>
    <PhoneIcon color="red.500" h={8} w={9} textColor={'black'} />
  </Center>
  <Center w='40px' h='40px' bg='tomato' color='white'>
    <Box as='span' fontWeight='bold' fontSize='lg'>
      1
    </Box>
  </Center>
</HStack>






    </div>
  );
};

export default Practice;
