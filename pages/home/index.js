import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Mainslider from "../../components/mainSlider";
import "./home.css";
import TopCategories from "../../components/categoriesSlider.js";
import { changename } from "../../redux/global";
import SpecialOffer from "../../components/specialOffer";
import { Grid, GridItem,Box } from "@chakra-ui/react";
import TwoSlider from "../../components/TwoProductSlider";
import MostPopular from "../../components/mostPopular";
import SubSlider from "../../components/subSlider";
const Home = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(0);

  // transform x change when click arrow
  const { name } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  return (
    <div className="home-wrapper">
      <Mainslider />

      <TopCategories />

      {/* table and single  slider section */}

      <Grid
        marginBottom={"33px"}
        templateColumns={[{ sm: "repeat(1,1fr)" }, { md: "repeat(12,1fr)" }]}
        // h="740px"   
        h={{ sm: "auto", md: "740" }}   
        gap={3}
      >
        {/* ----- single slider  */}

        <GridItem
          w="full"
          h="auto"
          display={[{ sm: "none" }, { md: "block" }]}
          colSpan={{ sm: 12, md: 4 }}
        >
          <TwoSlider />
        </GridItem>

        {/* // tables  component */}

        <GridItem h="auto"
        colSpan={{  sm: 12, md: 8 }} 

        
        >

          
          <SpecialOffer />
        </GridItem>
      </Grid>

      {/* -------table end -------- */}


  {/* ----- most popular component start here ------- */}
<div className="most-popular-home">
  

<MostPopular />


</div>



  {/* ----------most popular component end here ------- */}


{/* ----------subslider start here ---------- */}


<Box className="subslider-wrapper"  w='100%' h='auto'>


<SubSlider />

</Box>


{/* ----------subslider end here ---------- */}



    </div>
  );
};

export default Home;
