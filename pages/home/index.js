import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { useSelector,useDispatch } from "react-redux";
import Mainslider from "../../components/mainSlider";
import "./home.css";
import TopCategories from "../../components/categoriesSlider.js";
import { changename } from "../../redux/global";
import SpecialOffer from "../../components/specialOffer";
import { Grid, GridItem } from '@chakra-ui/react'
const Home = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(0);

  // transform x change when click arrow
const  {name} = useSelector(state => state.global)

  const dispatch = useDispatch();

 
   

    
  return (
  
<div className="home-wrapper">
  
<Mainslider />

<TopCategories/>



 {/* table and single  slider section */}

 <Grid templateColumns='repeat(12, 6fr)' h='740px'  bg=''  gap={6}>

 {/* ----- single slider  */}

  <GridItem w='100%'  colSpan={4} h='10' bg='blue.500' >

single
</GridItem>


{/* // tables */}

  <GridItem  colSpan={8}  >

  <SpecialOffer />


    </GridItem>
 
</Grid>







   {/* -------table end -------- */}

</div>

    
  );
};

export default Home;
