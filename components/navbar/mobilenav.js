import React from 'react';
import {HamburgerIcon,UnlockIcon
   } from '@chakra-ui/icons';

import {Grid,GridItem,Image} from '@chakra-ui/react';


const Mobilenav = () => {
    return (
        <Grid templateColumns='repeat(6, 1fr)' gap={4}  className='mobile-nav-wrapper'>

    <GridItem  colSpan={2}>

        <div className='icon-div'>
            <HamburgerIcon className='icon'  size='2em' />
        </div>
        
   
    </GridItem>      


{/* // logo center  */}

<GridItem  colSpan={2} className='logo-div'>
    
    <Image height="80%"   width='80%'  src='https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?t=st=1651928994~exp=1651929594~hmac=70ca61e6db9a22fb9804a8d8c2de28eddfa07ac2e88eeff3d31fe35698afc9e3&w=740' className='mobile-nav-logo-image' />


</GridItem>


 {/* shop cart div */}

<GridItem   colStart={5} colEnd={7}  className='shop-cart-div'>
    
<div className='cart-div'>
    <UnlockIcon className='cart-icon'/>
</div>

</GridItem>





        </Grid>
    );
}

export default Mobilenav;
