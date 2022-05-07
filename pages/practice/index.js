import React from "react";


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
 } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform } from "framer-motion";
const Practice = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  



  return (
    <div>
      <h1 className="   bg-slate-500">Practice</h1>
     
      <Center bg='tomato' h='100px' color='white'>
  This is the Center
</Center>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>





    </div>
  );
};

export default Practice;
