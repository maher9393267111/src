import React from "react";
import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

import {ArrowLeftIcon,ArrowRightIcon} from '@chakra-ui/icons'

import Newtab from "./newtab";
import BestSellers from "./bestSellersTab";
import Featured from "./featuredTab";
const SpecialOffer = () => {
 
  const [page, setPage] = useState(0);

  const increase = (e) => {
    setPage(page + 1);
    console.log('increase---->',page)

    if (page === 2) {
      // make button disabled
        setPage(0);
      console.log("page is 3 now i well be ---> 0");
   //   e.target.disabled = true;
      
    }
   
  };

  const decrease = (e) => {
    setPage(page - 1);

    if (page === 0) {
     
     // e.target.disabled = true;
      //setPage(0); ---> if i wont disblad it if poage ===0

      // go to page 2 after click page 0

        setPage(2);



    }
    console.log('decrease---->',page)
  };

  return (
    <div className="wrapper-offer">
      <div className="header-title">
        <h1>Special offer</h1>
      </div>
      {page}


{/* ------ arrows div ----  */}

<div className="arrows-container-parent">
    


<div className="arrows-container">
    


      <Button
        // disabled={page === 0 ? true : false}
        onClick={decrease}
        type="submit"
      >
      <ArrowLeftIcon/>
      </Button>

      {/* ----decrese button ------  */}

      <Button
        style={{ marginLeft: "10px" }}
        //  disabled={page ===2 ? true : false}
        onClick={increase}
        type="submit"
      >
      <ArrowRightIcon/>
      </Button>


      </div>

      </div>
{/* ------arrows div end ------- */}


      {/* ---- tab panel----- */}

      <div className="tab-container">
        <Tabs colorScheme="orange" size="md">
          <TabList>
            <Tab>New</Tab>
            <Tab>Featured</Tab>
            <Tab>Top Sellers</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* new product components */}

              <Newtab page={page} setPage={setPage} />
            </TabPanel>
            <TabPanel>
              {/* featured product components */}
              <Featured page={page} setPage={setPage} />
            </TabPanel>
            <TabPanel>
              {/* best sellers  product components */}

              <BestSellers page={page} setPage={setPage} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default SpecialOffer;
