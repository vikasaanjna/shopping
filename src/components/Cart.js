import { useSelector } from "react-redux";
import './cart.css'

function Cart() {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : cartItems;
  debugger;
  return <div className="row my-2 card-alignment"  >
    <h3 className='mx-3'>My Cart</h3>
    <div className="row justify-content-between">
      {cartItems && cartItems.map((item, index) => {
        return <div className="card col-lg-3" >
          <img src={item.images[0]} className="card-img-top card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Rs {item.price}</p>
          </div>
        </div>
      })}
    </div>
  </div>




}

export default Cart;