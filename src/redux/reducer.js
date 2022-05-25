const initialState=[];
const initialDetails={};
const initialFavourite={};



const ProductReducer = (state = initialState , action) => {
    switch (action.type) {
      case "get_request":
        return [action.payload];
      
      default:
        return state;
    }
  };

  const ProductDetailReducer = (state = initialDetails , action) => {
    switch (action.type) {
      case "product_details":
        return [action.payload];
      
      default:
        return state;
    }
  };
  const AddtoCartReducer = (state = initialFavourite , action) => {
    switch (action.type) {
      case "add_to_cart":
        return [...state ,action.payload];
      
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  export {ProductDetailReducer,AddtoCartReducer}