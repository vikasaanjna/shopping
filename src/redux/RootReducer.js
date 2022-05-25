import { combineReducers } from "redux";
import ProductReducer, { AddtoCartReducer, ProductDetailReducer } from "./reducer";

const rootReducer = combineReducers({
    product :ProductReducer,
    productDetails : ProductDetailReducer,
    AddtoFav : AddtoCartReducer
})


export default rootReducer; 