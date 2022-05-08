import React from 'react';
import TableproductCard from '../../helper/tableproductCard';
import { data } from './newTabData';
import { useState, useEffect } from 'react';
import { Grid,GridItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from "framer-motion";

const Newproducts = ({page,setPage}) => {

//framer motion

const items = {

    hidden: { opacity: 0, y: 200,x:200 }, // initial state
    show: { // animate {show}state
    opacity: 1,
    y: 0,
    x:0,
    transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 1.6,
    },
    },
    };


    // make function when page number change make animation

    const handlePageChange = (e) => {

        // when page change make animation



    }




    return (
        <div>


 {/* ----- when scroll to this  motion div well execute this code  animate ----> */}


<motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className="app__header-info"
      >


{page == 0 &&  

<motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className="app__header-info"
      >


<Grid gap={3}    templateColumns='repeat(3, 1fr)'>
{page == 0 &&
        data.slice(0, 3).map((item, index) => {
          return (
           
            <TableproductCard product={item} />
        
          );
        })}
        
        </Grid>


        </motion.div>}

{/* ---------page one end------- {page == 1 &&   */}



      {/* ------- page 2 -------- */}

{page == 1 &&     // itis work when arrow clicked and page number changed

<motion.div
        whileInView={{ x: [-110, 0], opacity: [0, 1]}}
        transition={{ duration: 0.6}}
        className="app__header-info">
            
      <Grid gap={3} templateColumns='repeat(3, 1fr)'>

      {page == 1 &&
        data.slice(3, 6).map((item, index) => {
          return (
            
              <TableproductCard product={item} />
        
          );
        })}

</Grid>

</motion.div>

    }





  {/* ------- page 3 -------- */}


  {page == 2 &&  

<motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className="app__header-info"
      >

  <Grid gap={3}  templateColumns='repeat(3, 1fr)'>
  {page == 2 &&
        data.slice(6, 9).map((item, index) => {
          return (
           
               <TableproductCard product={item} />
          
          );
        })}

        </Grid>

        </motion.div>}




{/* -----------page three end -------- */}




        </motion.div>

            
        </div>
    );
}

export default Newproducts;
