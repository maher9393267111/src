import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
 
    cart: [],
   
  },
  reducers: {
    addtocart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    deletefromcart: (state, action) => {

        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        console.log(state.cart ,'after delete');

    },


    // update couantity if product is already in cart

     updatecart: (state, action) => { // update cart

        state.cart = state.cart.map((item) => {
            if (item.id === action.payload.id) {

                item.count = action.payload.count;

            }

            return item;

        }

        );

    }




    
 


  

   
  },
});

// Action creators are generated for each case reducer function
export const {
    addtocart,
    deletefromcart,
 
} = carSlice.actions;

export default carSlice.reducer;


