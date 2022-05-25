import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { ProductDetails } from '../redux/Action';
import Filter from './filter';
import './products.css'

function Cards() {
  const [filters, setFilters] = useState([1, 2]);
  let selector = useSelector((state) => state.product)
  var k = selector[0]
  let navigate = useNavigate();
  let dispatch= useDispatch()

  const handleProductClick = (data) => {
    //push data to redux
    dispatch(ProductDetails(data))
    navigate(`/productdetails?productid=${data.id}`)
  }

  let filterProducts = k && Object.keys(k).filter((item) => {
    var data = k[item]
    if (filters.includes(1)) {
      if (data.price < 0 || (data.price > 1000 && !filters.includes(2))) {
          return false
      }
    }
    if (filters.includes(2)) {
      if (data.price < 1000 && !filters.includes(1)) {
        return false
      }
    }
    return true
  })

  return <>
    <Filter filters={filters} setFilters={setFilters} />
    <div className="d-flex row mx-3" >{filterProducts?.map((item) => {
      var data = k[item]
      return <div key={item} className=" col-lg-3 my-2 card-alignment"  >
        <div className="col">
          <div className="card" onClick={() => handleProductClick(data)}>
            <img src={data.images[0]}  className="card-img-top card-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">Rs {data.price}</p>
            </div>
          </div>
        </div>
      </div>
    })}
    </div>
  </>
}

export default Cards;