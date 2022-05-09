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
import TwoSlider from "../../components/TwoProductSlider";
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

 <Grid marginBottom={'33px'} templateColumns={'repeat(12,1fr)'} h='740px'    >

 {/* ----- single slider  */}

  <GridItem w='100%'   h='auto'
  display={[{sm:'none'},{md:'block'}]}
  colSpan={4}
  
  >

<TwoSlider />



</GridItem>


{/* // tables  colSpan={8} */}

  <GridItem  colSpan={8}   h='auto' >

  

  <SpecialOffer />


    </GridItem>
 
</Grid>







   {/* -------table end -------- */}

</div>

    
  );
};

export default Home;
