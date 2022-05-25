import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from '../redux/Action';
import './productDetails.css';

function Product() {
  let selector = useSelector((state) => state.productDetails)
  let dispatch = useDispatch()
  let cartArray = localStorage.getItem('cartItems');
  debugger;
  cartArray = cartArray ? JSON.parse(cartArray) : [];

  const onFavouriteClick = (selector) => {
    cartArray.push(JSON.parse(JSON.stringify(selector[0])));
    localStorage.setItem('cartItems', JSON.stringify(cartArray));
    alert("item added to cart")
  }


  return <div className="row my-2">
    <h3 className='mx-3'>Product Details</h3>
    <div className="row justify-content-center">
      <div className="card col-lg-3" >
        <img src={selector[0].images[0]} className="card-img-top product-image mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{selector[0].title}</h5>
          <p className="card-text">Rs {selector[0].price}</p>
          <p className="card-text"> {selector[0].brand}</p>
          <p className="card-text">{selector[0].description}</p>
          <button onClick={() => { onFavouriteClick(selector) }} type="button" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>



}

export default Product;