import React from "react";
import { HamburgerIcon, UnlockIcon,ChatIcon,AttachmentIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Button,
  DrawerContent,
  DrawerCloseButton,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  MenuDivider,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from "@chakra-ui/react";

const Mobilenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={4}
        className="mobile-nav-wrapper"
      >
        <GridItem colSpan={2}>
          <div className="icon-div">
            <HamburgerIcon
              className="icon-menu"
              ref={btnRef}
              onClick={onOpen}
            ></HamburgerIcon>
          </div>
        </GridItem>

        {/* // logo center  */}

        <GridItem colSpan={2} className="logo-div">
          <Image
            height="80%"
            width="80%"
            src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?t=st=1651928994~exp=1651929594~hmac=70ca61e6db9a22fb9804a8d8c2de28eddfa07ac2e88eeff3d31fe35698afc9e3&w=740"
            className="mobile-nav-logo-image"
          />
        </GridItem>

        {/* shop cart div */}

        <GridItem colStart={5} colEnd={7} className="shop-cart-div">
          <div className="cart-div">
            <UnlockIcon className="cart-icon" />
          </div>
        </GridItem>
      </Grid>

      {/* // sidebar */}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {/* // sidebar body  */}

            <Tabs size="md" variant="enclosed">
              <TabList>
                <Tab className="menu-tab">Menu</Tab>
                <Tab>Categories</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* Menu  panel*/}

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>Home</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>Demos</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>Shop</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>blog</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>Portfolio</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    {/*  Here........ */}

                    <Accordion allowMultiple>
                      <AccordionItem>
                        <AccordionButton>
                          <Box flex={"1"} textAlign="left">
                            pages
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel width={"100%"} pb={4}>
                          {/* here this item well expended first itmeee */}

                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box
                                    marginLeft={"-13px"}
                                    flex="1"
                                    textAlign="left"
                                  >
                                    Pre-Built Pages
                                  </Box>
                                  <AccordionIcon
                                    position={"relative"}
                                    marginRight="-2px"
                                  />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                {/*     working here      */}

                                <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Contact us</h1>
                  </Box>


                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Contact us 3</h1>
                  </Box>


                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Contact us 4</h1>
                  </Box>


                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>FAQs</h1>
                  </Box>

                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>FAQS2</h1>
                  </Box>

                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>our Team</h1>
                  </Box>

                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>about Us</h1>
                  </Box>


                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Shop</h1>
                  </Box>



                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>

                          {/* // this itme one expanded enddddd herer  */}


  {/* item 2 in panel expandeeed start */}

  <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box  marginLeft={'-13px'} flex='1' textAlign='left'>
          Pre-Built Layouts
        </Box>
        <AccordionIcon   position={"relative"}       marginRight="-18px" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

{/* // subitems here  */}

<Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Layout basic</h1>
                  </Box>

                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Layout boxed</h1>
                  </Box>

                  <Box bg='' borderBottom={'1px solid rgba(0,0,0,.105)'} color={'black'} paddingBottom='8px'  marginLeft={'5px'} className="menu-item" mb='20px'>
                    <h1>Layout fullscreen</h1>
                  </Box>




    </AccordionPanel>
  </AccordionItem>

  
</Accordion>









{/* item 2 in panel expandeeed endddddd */}



                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1  className="  bg-slate-500  ">  <span><ChatIcon/> </span>
                        wishlist</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1> <span><AttachmentIcon/></span>  compare</h1>
                  </Box>

                  <Box
                    bg=""
                    borderBottom={"1px solid rgba(0,0,0,.105)"}
                    color={"black"}
                    paddingBottom="8px"
                    marginLeft={"5px"}
                    className="menu-item"
                    mb="20px"
                  >
                    <h1>Login/Register</h1>
                  </Box>

                  <div></div>
                </TabPanel>
                <TabPanel>
                  {/* Categories panel */}

                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Mobilenav;
