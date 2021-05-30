

import { foods } from "../../FoodData/FoodData";
import * as Types from "../Types/ProductType";
const initialState = {
  products: foods,
  cart: [],
};
const productReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case Types.GET_ALL_PRODUCTS:
      return {
        ...state,
      };
    case Types.ADD_TO_CART:
      let cloneProduct = [...state.products]
   
      let cloneCart = [...state.cart];
      let uniqueItem = cloneCart.find(item => item.id === action.payload.id)
    
      if(!uniqueItem){
          cloneCart.push(action.payload)
      }
      if(uniqueItem){
        uniqueItem.qty +=1
    }
 
      return {
        ...state,
        products: cloneProduct,
        cart: cloneCart,
      };

      case Types.HANDLE_DECREMENT_ITEM:
          const cloneCartDecrement = [...state.cart]
          
          let decrementItem = cloneCartDecrement.find(item => item.id === action.payload.id)
          if(decrementItem){
              decrementItem.qty -=1;
          }
          if(decrementItem.qty === 0){
              const itemIndex = cloneCartDecrement.findIndex(item => item.id ===action.payload.id)
            cloneCartDecrement.splice(itemIndex, 1)
          }
        return {
          ...state,
          cart:cloneCartDecrement
        };

        

        case Types.HANDLE_INCREMENT_ITEM:
            const cloneCartIncrement = [...state.cart]
            let incrementItem = cloneCartIncrement.find(item => item.id === action.payload.id)
            if(incrementItem){
                incrementItem.qty +=1;
            }
          return {
            ...state,
            cart:cloneCartIncrement
          };

    default:
      break;
  }
  return newState;
};

export default productReducer;
