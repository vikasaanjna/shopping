import axios from "axios";

function Product(response) {
    return { type: 'get_request', payload: response }
}

function ProductDetails(data){
    // console.log(data)
    return { type: 'product_details', payload: data }
    
}
function Addtocart(selector){
    console.log(selector)
    return { type: 'add_to_cart', payload: selector }
    
}
export {ProductDetails, Addtocart}

function GetProducts() {
    return async (dispatch) => {
        await axios.get('https://dummyjson.com/products')
        .then(function (response) {
            dispatch(Product(response?.data?.products.flat()))
        })
    }
}  

export default GetProducts;