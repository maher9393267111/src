import React from 'react';
import { products } from './data';
import { useState } from 'react';
import { addtocart,   deletefromcart } from './redux/global';
import { useDispatch,useSelector } from 'react-redux';

// import {Box,Grid,Flex,Hstack,Button,Text,Heading,Image,Icon,Link} from '@chakra-ui/core';
const Practice = () => {

const dispatch = useDispatch();
const cart = useSelector(state => state.global.cart);  // cart is an array in global state
const [cartItems, setCartItems] = useState(cart);


  return (
    <div>
<div>
  <h1 className="bg-slate-500">Practice</h1>
  <h1>{cartItems.length}</h1>
</div>

{products.map(product => (
  


  <div style={{display:'flex'}}>
    <h1>{product.name}</h1>

<h1>
  <button
  
  onClick={() => {
    dispatch(addtocart(product));
    setCartItems(cart);
  }
  }
  >Add to cart</button>
</h1>



{/* -delete from cart-- */}


<h1>
  <button
  
  onClick={() => {
    dispatch(deletefromcart(product));
    setCartItems(cart);
  }
  }
  >delete from  cart</button>
</h1>



  </div>


))}



    </div>
  );
}

export default Practice;
